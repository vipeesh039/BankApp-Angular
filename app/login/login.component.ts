import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="............"

  accnum=""
  pswd=""

   

  constructor(private router:Router, private datas:DataService) { }

  ngOnInit(): void {
  }

  // accnochange(event:any){
  //   this.accnum=event.target.value;
  //   console.log(this.accnum)
  // }
  // pwdChange(event:any){
  //   this.pswd=event.target.value;
  //   console.log(this.pswd)
  // }

  login(){

  //  console.log(a.value,p.value);
    var accno=this.accnum
    var pwd=this.pswd

    let details =this.datas.account_details;
        if (accno in details) {
            if (pwd == details[accno]["password"]) {
                alert("login success");
                this.router.navigateByUrl("dashboard")
            }
            else {
                alert("incorrect password");
            }
        }
        else {
            alert("invalid account number");
        }
      
  }
 
Register(){

this.router.navigateByUrl("register")
}

}


