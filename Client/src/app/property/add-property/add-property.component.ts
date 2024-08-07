import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from '../../model/IPropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form')
  addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  propertyTypes:Array<string>=["House","Apartment","Duplex"];
  furnishTypes:Array<string>=["Fully","Semi","Unfurnished"];
  
  propertyView={} as IPropertyBase;
  constructor(private router: Router) {}

  ngOnInit() {}

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
  goBack() {
    this.router.navigate(['/']);
  }

   onSubmit() {
    console.log('Congrats, form Submitted');
    console.log(this.addPropertyForm);
  }

  
}
