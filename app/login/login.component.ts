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

    const result=this.datas.login(accno,pwd)

    if(result){
      alert("login success");
      this.router.navigateByUrl("dashboard")
    }
      
  }
 
Register(){

this.router.navigateByUrl("register")
}

}


