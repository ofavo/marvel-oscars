import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { MarvelResponse } from '../interfaces/marvel.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ad4d9361fefc2b091d3c3884b9708fb9&hash=64cd2bce0204e601620941bd4958caf4';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<MarvelResponse> {
    return this.http.get<MarvelResponse>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('API Error:', error);
          return throwError(() => new Error('Failed to load characters'));
        })
      );
  }
}
