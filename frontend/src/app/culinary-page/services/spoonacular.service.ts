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

}