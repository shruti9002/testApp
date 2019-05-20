import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges,OnInit {

  @Input() list;
  dataList:any = [];
  newDataList:any= [];
 
  constructor() { }

  ngOnInit() {
    
  }

  objectKeys(obj) {
    return Object.keys(obj);
  } 

  ngOnChanges(){
    const getDate = string => (([year, month, day]) => ({ day, month, year }))(string.split('-'));
 
    const groupBy = key => array =>
        array.reduce((objectsByKeyValue, obj) => {
            const value = obj[key];
            objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
            return objectsByKeyValue;

    }, {});

      var arr = []
      for(var k in this.list){
         if(k != 'status'){
            for(var j in this.list[k]){
              var newArr = this.list[k][j];
              newArr.map((e,i) =>{
                 for(var k1 in getDate(e.date)){
                     if(k1 == 'month'){
                          var obj = {
                              month: '',
                              group:''
                          }
                          if(e.date.indexOf(getDate(e.date)[k1]) > -1){
                              obj.month = getDate(e.date)[k1];
                              obj.group = e
                          }
                          arr.push(obj)
                     }
                 }
              })
          }

          const groupByMonth = groupBy('month');                  
          var finalArr = [];
          finalArr.push((groupByMonth(arr)))
          this.dataList = finalArr
          
          }
      }
      let goodResponse = [];
      this.dataList.reverse().map((element,i) => {
          const ordered = {};
          Object.keys(element).sort().forEach(function(key) {
            ordered[key] = element[key];
            goodResponse.push(ordered[key])   
          });
      });
      this.newDataList = goodResponse
  }

}
