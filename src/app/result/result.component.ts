import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges,OnInit {

  @Input() list;
 
  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    console.log(this.list)
  }

}
