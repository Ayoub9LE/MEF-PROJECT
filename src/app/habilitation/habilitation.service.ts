import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../register/User.model';

@Injectable({
  providedIn: 'root'
})
export class HabilitationService {

  private apiUrl = 'http://localhost:9090/users'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    console.log('API URL: ', this.apiUrl);
    return this.http.get<User[]>(`${this.apiUrl}`);
  }
}
