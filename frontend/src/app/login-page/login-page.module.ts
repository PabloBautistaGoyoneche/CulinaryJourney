import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login/login.component';
import { NavbarLoginComponent } from './components/navbar/navbar.component';
import { FooterLoginComponent } from './components/footer/footer.component';
import { RegisterPageComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    NavbarLoginComponent,
    FooterLoginComponent,
    NotificationComponent,
    
  ],
  exports: [
    LoginPageComponent,
    RegisterPageComponent,
    NavbarLoginComponent,
    FooterLoginComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LoginPageModule { }
