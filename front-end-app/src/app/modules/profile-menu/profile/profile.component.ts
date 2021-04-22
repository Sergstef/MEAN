import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../../authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
          private authentificationService: AuthentificationService,
          private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
  }

  logoutUser() {
  	this.authentificationService.logout();
  	this.router.navigate(['../auth']);
  	return false;
  }

}
