import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {

 constructor(private router: Router,
          private authentificationService: AuthentificationService,
          private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
  }

  logoutUser() {
  	this.authentificationService.logout();
  	this.router.navigate(['/auth']);
  	return false;
  }

}
