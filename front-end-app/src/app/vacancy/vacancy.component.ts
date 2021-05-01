import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from '../exchange-data.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
	vacancy: any;

  constructor(private exchangeDataService: ExchangeDataService) {
	  this.vacancy = this.exchangeDataService.getVacancy();
    this.vacancy = JSON.parse(this.vacancy);
  }

  ngOnInit(): void {
  	
  }

}
