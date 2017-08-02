import { Component, OnInit } from '@angular/core';
import { NumberService } from './number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string = 'Start App';
  red:boolean = false;
  num:number;
  name:string = "";

  constructor(public numberService: NumberService) {
  }

  click() {
    ++this.num;
    this.numberService.setNumber(this.num);
  }

  ngOnInit() {
    this.num = this.numberService.getNumber();
  }

  setName(event) {
    this.name = event;
  }
}
