import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-company-auth',
  templateUrl: './company-auth.component.html',
  styleUrls: ['./company-auth.component.css']
})
export class CompanyAuthComponent implements OnInit {

  constructor(private router: Router,
          private authentificationService: AuthentificationService,
          private flashMessages: FlashMessagesService) { 
  	
  }

  ngOnInit(): void {
  }

  companyLoginClick(formObj: any) {
    const company = {
      email: formObj.email,
      password: formObj.password
    }
    if(company.password == undefined) {
      console.log('data.msg');
      this.flashMessages.show("Empty pass", {
        cssClass: 'alert-danger',
        timeout: 4000
      })
      return false;
    }

    this.authentificationService.authCompany(company).subscribe(data => {
      if(!data.success) {
        this.flashMessages.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
        this.router.navigate(['../company-auth']);
      } else {
        console.log('Вы успешно авторизовались');
        this.router.navigate(['../company-dashboard']);
        this.authentificationService.storeCompany(data.token, data.company);
      }  
    })

  }

}
