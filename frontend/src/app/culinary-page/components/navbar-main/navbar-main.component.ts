import { Component } from '@angular/core';

@Component({
    selector: 'app-main-navbar',
    templateUrl: './navbar-main.component.html',
})

export class NavbarMainComponent {
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  logout(){
    localStorage.removeItem('success');
    localStorage.removeItem('error');
    //localStorage.removeItem('user');
    //localStorage.removeItem('id');
  }
  
}