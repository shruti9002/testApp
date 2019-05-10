import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  holidayList:any;
  
  ngOnInit(){
   
  }

  displayList($event){
    console.log(1111111111111111111111)
    this.holidayList = $event
  }

}
