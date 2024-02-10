import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { RecipeModalComponent } from './components/recipe-modal/recipe-modal.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { CulinaryPageRoutingModule } from './culinary-page-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    FavoritePageComponent,
    FooterMainComponent,
    NavbarMainComponent,
    RecipeModalComponent,
    RecipeViewComponent


  ],
  exports: [
    HomePageComponent,
    FavoritePageComponent,
    FooterMainComponent,
    NavbarMainComponent,
    RecipeModalComponent,
    RecipeViewComponent
  ],
  imports: [
    CommonModule,
    CulinaryPageRoutingModule,
    FormsModule,
  ]
})
export class CulinaryPageModule { }
