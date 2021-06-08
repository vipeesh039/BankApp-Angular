import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  account_details: any = {
    1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },

  }
  constructor() { }

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

      return true
    }
  }


  login(accno: any, pwd: any) {

    let details = this.account_details;
    if (accno in details) {
      if (pwd == details[accno]["password"]) {
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
