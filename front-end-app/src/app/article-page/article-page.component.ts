import { Component, OnInit } from '@angular/core';
import { CompanyAuthentificationService } from '../company-authentification.service';
import { DeleteDataService } from '../delete-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  article: any;

  constructor(private companyAuthentificationService: CompanyAuthentificationService,
    private deleteDataService: DeleteDataService,
    private router: Router) { 
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

  deleteArticle() {
    const companyObj = JSON.parse(this.companyAuthentificationService.getCompany()!);
    const articleObj = this.article;
    const obj = {
      company: companyObj,
      article: articleObj
    }
    this.deleteDataService.deleteArticle(obj).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/company-dashboard/company-profile']);
      } else {
        console.log(data.msg);
      }  
    });
    this.deleteDataService.deleteArticleFromDatabase(obj).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/company-dashboard/company-profile']);
      } else {
        console.log(data.msg);
      }  
    });
    this.companyAuthentificationService.updateCompany(companyObj).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/company-dashboard/company-profile']);
      } else {
        console.log(data.company);
        this.router.navigate(['/company-dashboard/company-articles']);
        this.companyAuthentificationService.storeCompany(data.token, data.company);
      }  
    });
  }

}
