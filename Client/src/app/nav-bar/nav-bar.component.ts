import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  private router = inject(Router);
  loggedinUser: string = '';
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedinUser = token;
    }
    return localStorage.getItem('token');
  }
}
