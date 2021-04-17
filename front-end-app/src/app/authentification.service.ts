import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
  	return this.http.post('http://localhost:3000/account/reg',
  							 user, 
  							 );
  }

}
