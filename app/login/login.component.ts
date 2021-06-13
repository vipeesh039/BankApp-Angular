import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  loginForm=this.fb.group({
    accnum:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  }) 

  constructor(private router:Router, private datas:DataService ,private fb:FormBuilder) { }

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
    var accno=this.loginForm.value.accnum
    var pwd=this.loginForm.value.pswd

    if(this.loginForm.valid){
      const result=this.datas.login(accno,pwd)

    if(result){
      alert("login success");
      this.router.navigateByUrl("dashboard")
    }
    }
    else{
      alert("invald form")
    }  
  }
 
Register(){

this.router.navigateByUrl("register")
}

}


