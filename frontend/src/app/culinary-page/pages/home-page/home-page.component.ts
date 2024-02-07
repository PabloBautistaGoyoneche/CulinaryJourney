import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';

@Component({
    selector: 'app-home-page',
    templateUrl: 'home-page.component.html'
})

export class HomePageComponent implements OnInit {
    recipes: any[] = [];
    constructor(
        private spoonacularService: SpoonacularService
    ) { }

    ngOnInit() {
        this.spoonacularService.getRandomRecipes().subscribe((data) => {
            // console.log(data.recipes);
            this.recipes = data.recipes;
        });
    }

}