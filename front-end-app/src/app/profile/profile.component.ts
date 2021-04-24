import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private authentificationService: AuthentificationService) { 
  	this.user = authentificationService.getUser();
  	this.user = JSON.parse(this.user);
  }

  ngOnInit(): void {
  }

}
