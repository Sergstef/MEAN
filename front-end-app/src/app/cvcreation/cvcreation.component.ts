import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-cvcreation',
  templateUrl: './cvcreation.component.html',
  styleUrls: ['./cvcreation.component.css']
})
export class CVcreationComponent implements OnInit {

  user: any;

  constructor(private authentificationService: AuthentificationService) { 
  	this.user = authentificationService.getUser();
  	this.user = JSON.parse(this.user);
  }

  ngOnInit(): void {
  }

}
