import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {
	public id: any;

  constructor() { }

  changeId(id: any) {
  	this.id = id;
  }
}
