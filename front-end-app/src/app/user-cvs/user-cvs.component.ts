import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-cvs',
  templateUrl: './user-cvs.component.html',
  styleUrls: ['./user-cvs.component.css']
})
export class UserCvsComponent implements OnInit {

  user: any;
  index!: number;

  constructor(private authentificationService: AuthentificationService) { 
  	this.user = authentificationService.getUser();
  	this.user = JSON.parse(this.user);
  }

  ngOnInit(): void {
  }

  setIndex(index: number) {
    this.index = index;
    const obj = {
      cvs: this.user.cvs,
      index: this.index
    }
    this.authentificationService.setCvsIndex(obj);
  } 

}
