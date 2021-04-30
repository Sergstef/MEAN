import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Vacancy } from './vacancy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  constructor(private http: Http) { }

  loadVacancies(): Observable<Vacancy[]> {
    return this.http.get('http://localhost:3000/account/getVacancies')
    				.pipe(map((response: any) => response.json()));
  }

  getVacancy(id: any): Observable<Vacancy> {
    return this.http.get('http://localhost:3000/account/getVacInfo',
                 id
                 ).pipe(map((response: any) => response.json()));
  }
}
