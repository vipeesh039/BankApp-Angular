import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 dacno=""
 dpswd=""
 damount=""

 wacno=""
 wpswd=""
 wamount=""

  constructor(private dataser:DataService) { }

  ngOnInit(): void {
  }

  deposit(){

    var dacno=this.dacno
    var dpswd=this.dpswd
    var damount=this.damount

    const result=this.dataser.deposit(dacno,dpswd,damount)
    if(result){

      alert("Amount" + damount +  "Credited Successfully and Balance is"  +  result)
    }

    
  }
    withdraw(){

    var wacno=this.wacno
    var wpswd=this.wpswd
    var wamount=this.wamount

    const result=this.dataser.withdraw(wacno,wpswd,wamount)
    if(result){

      alert("Amount" + wamount +  "debited Successfully and Balance is"  +  result)
    }
  }

}
