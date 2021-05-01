import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CompanyAuthentificationService } from '../company-authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
          public authentificationService: AuthentificationService,
          private flashMessages: FlashMessagesService,
          public companyAuthentificationService: CompanyAuthentificationService) { }

  ngOnInit(): void {
  }

  userLoginClick(formObj: any) {
    const user = {
      email: formObj.email,
      password: formObj.password
    }
    if(user.password == undefined) {
      console.log('data.msg');
      this.flashMessages.show("Empty pass", {
        cssClass: 'alert-danger',
        timeout: 4000
      })
      return false;
    }

    this.authentificationService.authUser(user).subscribe(data => {
      if(!data.success) {
        this.flashMessages.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
        this.router.navigate(['/home']);
      } else {
        console.log('Вы успешно авторизовались');
        this.router.navigate(['../dashboard']);
        this.authentificationService.storeUser(data.token, data.user);
      }  
    })

  }

}
