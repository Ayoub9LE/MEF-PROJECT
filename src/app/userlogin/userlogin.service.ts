import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  private apiUrl = 'http://localhost:9090/users'; // The API URL to retrieve the list of users

  constructor(private http: HttpClient) { }

  // Method to send user login data to the backend for authentication
  login(login: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`; // Replace '/login' with your actual login API endpoint
    return this.http.post(loginUrl, { login, password }, { responseType: 'text' });
  }
  
}
