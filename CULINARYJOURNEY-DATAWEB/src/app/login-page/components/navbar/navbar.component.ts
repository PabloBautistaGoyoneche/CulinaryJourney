import { Component } from '@angular/core';

@Component({
    selector: 'app-login-navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarLoginComponent {
showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}