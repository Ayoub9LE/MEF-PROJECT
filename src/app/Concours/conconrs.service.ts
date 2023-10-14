import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Concours } from './Concours.model';

@Injectable({
  providedIn: 'root'
})
export class ConconrsService {

  private apiUrl = 'http://localhost:9090/api/concours';

  constructor(private http: HttpClient) { }

  getConcoursList(): Observable<Concours[]> {
    return this.http.get<Concours[]>(`${this.apiUrl}/list`);
  }

  addConcours(concours: Concours): Observable<Concours> {
    return this.http.post<Concours>(`${this.apiUrl}/add`, concours).pipe(
      catchError(err => {
        console.error('An error occurred:', err.error.message);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  deleteConcours(id: number): Observable<Concours> {
    return this.http.delete<Concours>(`${this.apiUrl}/delete/${id}`);
  }

  updateConcours(concours: Concours): Observable<Concours> {
    return this.http.put<Concours>(`${this.apiUrl}/update`, concours);
  }

}
