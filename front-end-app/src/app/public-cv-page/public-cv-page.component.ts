import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from '../exchange-data.service';

@Component({
  selector: 'app-public-cv-page',
  templateUrl: './public-cv-page.component.html',
  styleUrls: ['./public-cv-page.component.css']
})
export class PublicCvPageComponent implements OnInit {

  cv: any;

  constructor(private exchangeDataService: ExchangeDataService) {
	  this.cv = this.exchangeDataService.getCV();
    this.cv = JSON.parse(this.cv);
  }

  ngOnInit(): void {
  }

}
