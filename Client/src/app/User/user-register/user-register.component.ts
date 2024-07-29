import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AlertifyService } from '../../../services/alertify.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  //user: any = {};
  user!: User;
  registerationForm!: FormGroup;
  userSubmitted: boolean | undefined;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    // this.registerationForm=new FormGroup({
    //   userName:new FormControl(null,Validators.required),
    //   email:new FormControl(null,[Validators.required,Validators.email]),
    //   password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmpwd: new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    // },this.pwdMatchValidator);
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmpwd: [null, [Validators.required, Validators.minLength(8)]],
        mobile: new FormControl(null, [
          Validators.required,
          Validators.maxLength(10),
        ]),
      },
      { validators: this.pwdMatchValidator }
    );
  }
  pwdMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup; // Cast to FormGroup
      const password = formGroup.get('password')?.value;
      const confirmPwd = formGroup.get('confirmpwd')?.value;

      return password && confirmPwd && password === confirmPwd
        ? null
        : { notmatched: true };
    };
  }
  userData(): User {
    return (this.user = {
      userName: this.registerationForm.get('userName')?.value,
      email: this.registerationForm.get('email')?.value,
      password: this.registerationForm.get('password')?.value,
      mobile: this.registerationForm.get('mobile')?.value,
    });
  }
  onSubmit() {
    this.userSubmitted = true;
    console.log(this.registerationForm);
    if (this.registerationForm.valid) {
      this.user = this.registerationForm.value;
      // this.userService.addUser(this.user);
      this.userService.addUser(this.userData());
      this.alertify.success('Registartion successfull');
      this.registerationForm.reset();
      this.userSubmitted = false;
    } else {
      this.alertify.error('Invalid data. Registration unsuccessful.');
    }
  }
}
