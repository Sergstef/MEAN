import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../load-data.service';
import { ExchangeDataService } from '../exchange-data.service';
import { Article } from '../article';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {

	articles!: Array<Article>;

  constructor(private loadDataService: LoadDataService, private exchangeDataService: ExchangeDataService) { 
  }

   ngOnInit(): void {
  	this.get();
  }

  get() {
  	this.loadDataService.loadArticles()
  					.subscribe((results) => {this.articles = results;});
  }

  sendArticle(article: any) {
    this.exchangeDataService.changeArticle(article);
  }

}
