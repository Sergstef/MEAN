import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../load-data.service';
import { ExchangeDataService } from '../exchange-data.service';
import { User } from '../user';

@Component({
  selector: 'app-cvs-list',
  templateUrl: './cvs-list.component.html',
  styleUrls: ['./cvs-list.component.css']
})
export class CvsListComponent implements OnInit {

  users!: Array<User>;

  constructor(private loadDataService: LoadDataService, private exchangeDataService: ExchangeDataService) { 
  }

  ngOnInit(): void {
  	this.get();
  }

  get() {
  	this.loadDataService.loadVacancies()
  					.subscribe((results) => {this.users = results;});
  }

  sendUser(user: any) {
    this.exchangeDataService.changeVacancy(user);
  }



}
