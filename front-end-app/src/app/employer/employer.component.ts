import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from '../exchange-data.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  employer: any;

  constructor(private exchangeDataService: ExchangeDataService) {
	this.employer = this.exchangeDataService.getEmployer();
    this.employer = JSON.parse(this.employer);
  }

  ngOnInit(): void {
  }

  sendVac(vacancy: any) {
    this.exchangeDataService.changeVacancy(vacancy);
  }

}
