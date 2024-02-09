import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class SpoonacularService {

    private apiKey = 'c2381a467d4245c2bcb03e81f34acc52';
    private apiUrl = 'https://api.spoonacular.com'; 

    constructor(private http: HttpClient) {}

    getRandomRecipes(): Observable<any> {
        const url = `${this.apiUrl}/recipes/random?apiKey=${this.apiKey}&number=10`;
        return this.http.get(url);
    };

    getRecipesById(id: number): Observable<any> {
        const url = `${this.apiUrl}/recipes/${id}/information?apiKey=${this.apiKey}`;
        return this.http.get(url);
    };

    //-----------------------------------------------------------------------------------------//

    getRecipesByQuery(query: string): Observable<any> {
        const url = `${this.apiUrl}/recipes/autocomplete?apiKey=${this.apiKey}&query=${query}&number=10`;
        return this.http.get(url);
    };

    getRecipesByIngredients(ingredients: string): Observable<any> {
        const url = `${this.apiUrl}/recipes/findByIngredients?apiKey=${this.apiKey}&ingredients=${ingredients}`;
        return this.http.get(url);
    };

    getRecipesByNutrition(nutrition: string): Observable<any> {
        const url = `${this.apiUrl}/recipes/findByNutrients?apiKey=${this.apiKey}&nutrients=${nutrition}`;
        return this.http.get(url);
    };

    getRecipesByDiet(diet: string): Observable<any> {
        const url = `${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&diet=${diet}`;
        return this.http.get(url);
    };

    getRecipesByCuisine(cuisine: string): Observable<any> {
        const url = `${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&cuisine=${cuisine}`;
        return this.http.get(url);
    };

    getRecipesByType(type: string): Observable<any> {
        const url = `${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&type=${type}`;
        return this.http.get(url);
    };

    getRecipesByIntolerances(intolerances: string): Observable<any> {
        const url = `${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&intolerances=${intolerances}`;
        return this.http.get(url);
    };

    getRecipesByWine(wine: string): Observable<any> {
        const url = `${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&wine=${wine}`;
        return this.http.get(url);
    };

    getRecipesBySearch(search: string): Observable<any> {
        const url = `${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&query=${search}`;
        return this.http.get(url);
    };

    getRecipesByComplexSearch(query: string, cuisine: string, diet: string, intolerances: string, type: string, wine: string, nutrition: string): Observable<any> {
        const url = `${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&query=${query}&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&type=${type}&wine=${wine}&nutrients=${nutrition}`;
        return this.http.get(url);
    };

    getRecipeInformation(id: number): Observable<any> {
        const url = `${this.apiUrl}/recipes/${id}/information?apiKey=${this.apiKey}`;
        return this.http.get(url);
    };

    getRecipeEquipment(id: number): Observable<any> {
        const url = `${this.apiUrl}/recipes/${id}/equipmentWidget.json?apiKey=${this.apiKey}`;
        return this.http.get(url);
    };

    getRecipeIngredients(id: number): Observable<any> {
        const url = `${this.apiUrl}/recipes/${id}/ingredientWidget.json?apiKey=${this.apiKey}`;
        return this.http.get(url);
    };

    

}