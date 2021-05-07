import { Component, OnInit } from '@angular/core';
import { CompanyAuthentificationService } from '../company-authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  company: any;

  constructor(private router: Router, private companyAuthentificationService: CompanyAuthentificationService) { 
  	this.company = companyAuthentificationService.getCompany();
  	this.company = JSON.parse(this.company);
  }

  ngOnInit(): void {
  }

  addArticle(formObj: any) {
  	const obj = {
  		heading: formObj.name,
  		companyName: formObj.companyName,
  		articleText: formObj.articleText
  	}

  	const articleCompanyArr = {
  		article: obj,
  		company: this.company
  	}

    this.companyAuthentificationService.addArticle(articleCompanyArr).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/company-dashboard/company-profile']);
      } else {
        console.log(data.msg);
        const articleCompanyIdArr = {
          id: data._id,
          article: obj,
          company: this.company
        }
        this.companyAuthentificationService.registerArticle(articleCompanyIdArr).subscribe(data => {
          if(!data.success) {
            console.log('err.message');
            console.log(data.msg);
            this.router.navigate(['/company-dashboard/company-profile']);
          } else {
            console.log(data.msg);
          }      
        });    
      }
    });

    this.companyAuthentificationService.updateCompany(this.company).subscribe(data => {
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
