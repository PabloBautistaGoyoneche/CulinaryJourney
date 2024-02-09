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

        // Obtener el token de localStorage
        // const success = JSON.parse(localStorage.getItem('success')??'');
        // const token = success?.access_token; // Acceder al token dentro de success
        const token = this.getToken();
        console.log('token', token);
        
        // Verificar si el token está disponible
        if (!token) {
            throw new Error('No hay token de autenticación disponible');
        }

        // Obtener el ID de usuario desde el token
        const userId = this.getUserIdFromToken();
        console.log('UserId', userId);
        if (userId) {
            // Usar el ID de usuario en tu solicitud POST
            // this.tuServicio.postSolicitud(userId, otrosDatos).subscribe((response) => {
            //     // Manejar la respuesta
            // });
        }
        
        // Configurar el encabezado de autorización con el token
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        });

        return this.http.post(`${this.apiUrl}/create-favorite-recipes`, { "user_id": 1, "recipe_id": recipeId}, { headers });
    };

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