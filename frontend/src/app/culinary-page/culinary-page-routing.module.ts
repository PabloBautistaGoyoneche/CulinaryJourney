import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'favorite',
        component: FavoritePageComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
    }

]

@NgModule({
    imports: [
        RouterModule.forChild( routes ),
    ],
    exports: [
        RouterModule,
    ],
})
export class CulinaryPageRoutingModule { }