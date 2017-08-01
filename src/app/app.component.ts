import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Start App';
  red:boolean = false;
  num:number = 0;

  click() {
    ++this.num;
  }
}
