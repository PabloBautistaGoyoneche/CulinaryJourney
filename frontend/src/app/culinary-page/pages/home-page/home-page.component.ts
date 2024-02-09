import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';
import { Recipe } from '../../interfaces/recipe/recipe.interface';

@Component({
    selector: 'app-home-page',
    templateUrl: 'home-page.component.html'
})

export class HomePageComponent implements OnInit {
    recipes: any[] = [];
    searchText: string = "";
    constructor(
        private spoonacularService: SpoonacularService
    ) { }

    ngOnInit() {
        this.spoonacularService.getRandomRecipes().subscribe((data) => {
            this.recipes = data.recipes;
        });
    }

    searchRecipes(): void {
        let searchResults: any[] = [];

        if (this.searchText !== '') {
            this.recipes = [];
            this.spoonacularService.getRecipesByQuery(this.searchText).subscribe((search) => {
                searchResults = search;
                searchResults.forEach((result) => {
                    this.spoonacularService.getRecipesById(result.id).subscribe((data: Recipe) => {
                        this.recipes.push(data);
                    });
                });

            });

            console.log('----- recipes -----', this.recipes, '----- fin recipes -----');
            
        } else {
            this.spoonacularService.getRandomRecipes().subscribe((data) => {
                this.recipes = data.recipes;
            });
            
        }
    }
}