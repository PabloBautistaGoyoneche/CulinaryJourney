import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {

    private apiUrl = 'http://localhost:8000';
    
    constructor(private http: HttpClient) {}

    saveFavoritesByIdUser(recipeId: number): Observable<any> {

        console.log('localStorage', localStorage.getItem('success'));

        const token = this.getToken();
        console.log('token', token);
        
        if (!token) {
            throw new Error('No hay token de autenticación disponible');
        }
        const userId = this.getUserIdFromToken();
        console.log('UserId', userId);

        if (userId == null) {
            throw new Error('No se pudo obtener el ID de usuario desde el token');
        }
        
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        });
        return this.http.post(`${this.apiUrl}/create-favorite-recipes`, { "user_id": userId, "recipe_id": recipeId}, { headers });
    };

    showFavoritesByIdUser(): Observable<any> {
        const token = this.getToken();
        if (!token) {
            throw new Error('No hay token de autenticación disponible');
        }
        const userId = this.getUserIdFromToken();
        if (userId == null) {
            throw new Error('No se pudo obtener el ID de usuario desde el token');
        }
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        });
        return this.http.post(`${this.apiUrl}/see-favorite-recipes?user_id=${userId}`, { headers });
    }

    getToken: () => string = () => {
        const success = JSON.parse(localStorage.getItem('success')??'');
        return success?.access_token;
    }

    getUserIdFromToken: () => number | null = () => {
        const token = this.getToken();
        if (token === "") {
            return null;
        }
        const decodedToken: any = jwtDecode(token);
        return decodedToken.user_id;

    }
    
}