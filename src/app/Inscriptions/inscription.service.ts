import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Inscription } from './Inscription.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private apiUrl = 'http://localhost:9090/api/inscriptions';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addInscription(inscription: Inscription): Observable<Inscription> {
    return this.http.post<Inscription>(`${this.apiUrl}`, inscription).pipe(
      catchError(err => {
        console.error('An error occurred:', err.error.message);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }
  
  getInscriptions(): Observable<Inscription[]> {
    return this.http.get<Inscription[]>(this.apiUrl);
  }

  getInscriptionById(id: number): Observable<Inscription> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Inscription>(url).pipe(
      catchError(err => {
        console.error('An error occurred:', err.error.message);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  updateInscription(inscription: Inscription): Observable<Inscription> {
    const url = `${this.apiUrl}/${inscription.id}`;
    return this.http.put<Inscription>(url, inscription, this.httpOptions)
      .pipe(
        catchError(err => {
          console.error('An error occurred:', err.error.message);
          return throwError('Something went wrong; please try again later.');
        })
      );
  }
}
