import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/pages/login/login.component';
import { RegisterPageComponent } from './login-page/pages/register/register.component';

const routes: Routes = [
  { 
    path: 'login', component: LoginPageComponent 
  },
  { 
    path: 'register', component: RegisterPageComponent 
  },
  // { 
  //   path: '', redirectTo: 'login', pathMatch: 'full' 
  // },
  { 
    path: '**', redirectTo: 'login' 
  },
  // { 
  //   path: 'login', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule),
  // },
  // { 
  //   path: 'register', loadChildren: () => import('./login-page/pages/register/register.module').then(m => m.RegisterPageModule),
  // },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
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
