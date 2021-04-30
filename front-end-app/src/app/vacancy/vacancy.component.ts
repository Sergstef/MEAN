import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from '../exchange-data.service';
import { LoadDataService } from '../load-data.service';
import { Vacancy } from '../vacancy';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
	vacancy: any;
	id: any;

  constructor(private exchangeDataService: ExchangeDataService, 
  	private loadDataService: LoadDataService) { 

	this.id = this.exchangeDataService.id;
  	console.log(this.id);
  }

  ngOnInit(): void {
  	this.loadDataService.getVacancy(this.id)
  					.subscribe((result) => {console.log(result);
  						this.vacancy = result;});
  }

}
