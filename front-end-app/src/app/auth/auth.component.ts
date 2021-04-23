import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: any;


  constructor(private router: Router,
          private authentificationService: AuthentificationService,
          private flashMessages: FlashMessagesService) { 
  	
  }

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
        this.router.navigate(['/auth']);
      } else {
        console.log('Вы успешно авторизовались');
        this.router.navigate(['/dashboard']);
        this.authentificationService.storeUser(data.token, data.user);
      }

    })

  }

}
