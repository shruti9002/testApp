import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestApi } from '../shared/rest-api.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit {

  countries = [
    {
      id:'US', text:'United States of America'
    },
    {
      id:'BR', text:'Great Britain'
    },
    {
      id:'FR', text:'France'
    },
    {
      id:'DE', text:'Germany'
    },
    {
      id:'ID', text:'Indonesia'
    }
  ]
  years:any = []
  @Output() HolidayList:any = new EventEmitter();

  constructor(private service: RestApi) { }

  ngOnInit() {
    const min = 2012;
    const max = 2021;
    for (var i = min; i<=max; i++){
      this.years.push(i)
    }
  }

  GetHoliday(country,year){
    console.log(country,year)
    this.service.getDetails(country,year).subscribe((data) =>{
      this.HolidayList.emit(data);
    })


  }

}
