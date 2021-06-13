import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  accnum=""
  pswd=""

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    accnum:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private dataser:DataService, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
Register(){

  if(this.registerForm.get("uname")?.errors){
    alert("invalid username")
  }
  
  var uname=this.registerForm.value.uname;
  var accnum=this.registerForm.value.accnum;
  var pswd=this.registerForm.value.pswd;

  if(this.registerForm.valid){
    const result=this.dataser.register(uname,accnum,pswd)
    if(result){
    alert("Successfully Registered......")
    this.router.navigateByUrl("")
    }
    else{
      alert("Account Already Exist, Please Login")
    }
  }
  else{
    alert("Form Invalid")
  }

}
}
