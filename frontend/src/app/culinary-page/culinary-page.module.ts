import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { RecipeDialogComponent } from './components/recipe-dialog/recipe-dialog.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { CulinaryPageRoutingModule } from './culinary-page-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
    FavoritePageComponent,
    FooterMainComponent,
    NavbarMainComponent,
    RecipeDialogComponent,
    RecipeViewComponent


  ],
  exports: [
    HomePageComponent,
    FavoritePageComponent,
    FooterMainComponent,
    NavbarMainComponent,
    RecipeDialogComponent,
    RecipeViewComponent
  ],
  imports: [
    CommonModule,
    CulinaryPageRoutingModule
  ]
})
export class CulinaryPageModule { }
