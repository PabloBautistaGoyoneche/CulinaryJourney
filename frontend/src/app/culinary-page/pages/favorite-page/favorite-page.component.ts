import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';

@Component({
    selector: 'app-favorite-page',
    templateUrl: 'favorite-page.component.html'
})

export class FavoritePageComponent implements OnInit {
    recipes: any[] = [];

    constructor(
        private spoonacularService: SpoonacularService
    ) { }

    ngOnInit() {
        // this.spoonacularService.getRandomRecipes().subscribe((data) => {
        //     this.recipes = data.recipes;
        // });
    }

}