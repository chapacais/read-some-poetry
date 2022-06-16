import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poem } from '../models/Poem';

@Injectable({
  providedIn: 'root'
})
export class PoetryService {

  baseUrl: string = 'https://poetrydb.org'

  constructor(private _http: HttpClient) { }

  readRandomPoem(quantity?: number, property?: string): Observable<Poem[]> {
    const url = `${this.baseUrl}/random${quantity ? `/${quantity}` : ''}${property ? `/${property}` : ''}`;
    return this._http.get<Poem[]>(url);
  }

  readPoemByTitle(title: any): Observable<Poem[]> {
    const url = `${this.baseUrl}/title/${title}`;
    return this._http.get<Poem[]>(url);
  }

  readAuthors(): Observable<Poem[]> {
    const url = `${this.baseUrl}/author`;
    return this._http.get<Poem[]>(url);
  }
}
