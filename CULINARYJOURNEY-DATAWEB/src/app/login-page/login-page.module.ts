import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login/login.component';
import { NavbarLoginComponent } from './components/navbar/navbar.component';
import { FooterLoginComponent } from './components/footer/footer.component';
import { RegisterPageComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
// import { LoginPageRoutingModule } from './login-page.routing.module';

// const Routes = [
//   { path: '/login', component: LoginPageComponent },
//   { path: '/register', component: RegisterPageComponent }
// ];



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    NavbarLoginComponent,
    FooterLoginComponent,
    
  ],
  exports: [
    LoginPageComponent,
    RegisterPageComponent,
    NavbarLoginComponent,
    FooterLoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LoginPageModule { }
