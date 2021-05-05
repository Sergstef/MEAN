import { Component, OnInit } from '@angular/core';
import { CompanyAuthentificationService } from '../company-authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  article: any;

  constructor(private companyAuthentificationService: CompanyAuthentificationService) { 
  	const articles = JSON.parse(this.companyAuthentificationService.getArticles()!);
  	const index = +this.companyAuthentificationService.getArticleIndex()!;
  	for(let i = 0; i < articles.length; i++) {
  		if (i == index) {
  			this.article = articles[i];
  		}
  	}
  	console.log(this.article);
  }

  ngOnInit(): void {
  }

}
