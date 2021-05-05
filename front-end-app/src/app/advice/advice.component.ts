import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from '../exchange-data.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {

  article: any;

  constructor(private exchangeDataService: ExchangeDataService) {
	  this.article = this.exchangeDataService.getArticle();
    this.article = JSON.parse(this.article);
  }

  ngOnInit(): void {
  }

}
