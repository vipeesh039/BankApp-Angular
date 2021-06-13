import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser=""
  currentAcc=""

  account_details: any = {
    1000: { name: "Rocky", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "Balu", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "Jony", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "Ram", accno: 1003, password: "testfour", amount: 10000 },

  }
  constructor() { 
    this.getDetails()
  }

  saveDetails(){
    localStorage.setItem("account_details",JSON.stringify(this.account_details))
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
   }
   if(this.currentAcc){
    localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
   }
  }

  getDetails(){
    if(localStorage.getItem("account_details")){
      this.account_details=JSON.parse(localStorage.getItem("account_details") || '')
    }

    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
    }
    if(localStorage.getItem("currentAcc")){
      this.currentAcc=JSON.parse(localStorage.getItem("currentAcc") || '')
    }
    
  }

  deleteAccDetails(acno:any){
    if(this.currentAcc==acno){
      localStorage.removeItem("curretAcc")
      this.saveDetails()
      return true
    }
    else{
      return false
    }
  }

  register(name: any, accno: any, password: any) {
    let dataset = this.account_details

    if (accno in dataset) {

      return false
    }
    else {
      this.account_details[accno] = {
        name,
        accno,
        password,
        amount: 0
      }
      this.saveDetails()
      return true
    }
  }


  login(accno: any, pwd: any) {

    let details = this.account_details;
    if (accno in details) {
      if (pwd == details[accno]["password"]) {
        this.currentUser=details[accno]["name"]
        this.currentAcc=accno
        this.saveDetails()
        return true

      }
      else {
        alert("incorrect password");
        return false
        
      }
    }
    else {
      alert("invalid account number");
      return false
      
    }
  }



  deposit(acno: any, pswd: any, amount: any) {

    var amt = parseInt(amount)
    let details = this.account_details
    if (acno in details) {
      if (pswd == details[acno]["password"]) {
        details[acno]["amount"] += amt
        this.saveDetails()
        return details[acno]["amount"]

      }
      else {
        alert("incorrect password");
        return false
        
      }
    }
    else {
      alert("invalid account number");
      return false
      
    }
  }





  withdraw(acno: any, pswd: any, amount: any) {

    var amt = parseInt(amount)
    let details = this.account_details
    if (acno in details) {
      if (pswd == details[acno]["password"]) {

        if(amount<details[acno]["amount"]){
        details[acno]["amount"] -= amt
        this.saveDetails()
        return details[acno]["amount"]
      }
      else {
        alert("insufficent balance");
        return false
      }
    }
       else {
        alert("incorrect password");
        return false
      }
    }
    else {
      alert("invalid account number");
      return false
      
    }
  }

}
