import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/pages/login/login.component';
import { RegisterPageComponent } from './login-page/pages/register/register.component';

const routes: Routes = [
  { 
    path: 'login',
    component: LoginPageComponent 
  },
  { 
    path: 'register',
    component: RegisterPageComponent 
  },
  {
    path: 'home',
    loadChildren: () => import('./culinary-page/culinary-page.module').then(m => m.CulinaryPageModule)
  },
  { 
    path: '**',
    redirectTo: 'login' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
