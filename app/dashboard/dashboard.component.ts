import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  account=""

  lDate: Date= new Date()

 dacno=""
 dpswd=""
 damount=""

 wacno=""
 wpswd=""
 wamount=""

 depositForm=this.fb.group({
  dacno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  dpswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  damount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

withdrawForm=this.fb.group({
  wacno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  wpswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  wamount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

  user=this.dataser.currentUser

  constructor(private dataser:DataService,private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  deposit(){

    var dacno=this.depositForm.value.dacno
    var dpswd=this.depositForm.value.dpswd
    var damount=this.depositForm.value.damount

   if(this.depositForm.valid){
    const result=this.dataser.deposit(dacno,dpswd,damount)
    if(result){

      alert("Amount" + damount +  "Credited Successfully and Balance is"  +  result)
    }
   }
   else{
     alert("Invalid Form")
   } 
  }



    withdraw(){

    var wacno=this.withdrawForm.value.wacno
    var wpswd=this.withdrawForm.value.wpswd
    var wamount=this.withdrawForm.value.wamount

    if(this.withdrawForm.valid){
      const result=this.dataser.withdraw(wacno,wpswd,wamount)
    if(result){

      alert("Amount" + wamount +  "debited Successfully and Balance is"  +  result)
    }
    }
    else{
      alert("Invald Form")
    }
  }

  deleteAcc(){
    
    this.account=this.dataser.currentAcc
  }

  onCancel(){
    this.account=""
  }

  onDelete(event:any){
    const result=this.dataser.deleteAccDetails(event)
    if(result){
      alert("Account Deleted !!")
      this.router.navigateByUrl("")
    }
    else{
      alert("Operation Denied...")
    }
  }
}
