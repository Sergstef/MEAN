import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../load-data.service';
import { ExchangeDataService } from '../exchange-data.service';
import { CV } from '../CV';

@Component({
  selector: 'app-cvs-list',
  templateUrl: './cvs-list.component.html',
  styleUrls: ['./cvs-list.component.css']
})
export class CvsListComponent implements OnInit {

  cvs!: Array<CV>;

  constructor(private loadDataService: LoadDataService, private exchangeDataService: ExchangeDataService) { 
  }

  ngOnInit(): void {
  	this.get();
  }

  get() {
  	this.loadDataService.loadCVs()
  					.subscribe((results) => {this.cvs = results;});
  }

  sendCV(cv: any) {
    this.exchangeDataService.changeCV(cv);
  }



}
