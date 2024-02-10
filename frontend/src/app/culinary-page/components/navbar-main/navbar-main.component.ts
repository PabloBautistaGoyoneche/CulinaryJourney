import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-navbar',
    templateUrl: './navbar-main.component.html',
})

export class NavbarMainComponent {

  constructor(
    private router: Router,
  ) {}

  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  logout(){
    localStorage.removeItem('success');
    localStorage.removeItem('error');
    this.router.navigate(['/login']);
    //localStorage.removeItem('user');
    //localStorage.removeItem('id');
  }
  
}