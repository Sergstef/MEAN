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

  isEmpty: boolean = false;


  constructor(private router: Router,
          private authentificationService: AuthentificationService,
          private flashMessages: FlashMessagesService) { 
  	
  }

  ngOnInit(): void {
  }

  userLoginClick(formObj: any) {
    this.isEmpty = false;
    const user = {
      email: formObj.email,
      password: formObj.password
    }

    if(user.password = "") {
      this.flashMessages.show("Empty pass", {
        timeout: 4000
      })
    }

    this.authentificationService.authUser(user).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/auth']);
      } else {
        console.log('Вы успешно авторизовались');
        this.router.navigate(['/dashboard']);
        this.authentificationService.storeUser(data.token, data.user);
      }  
    })

  }

}
