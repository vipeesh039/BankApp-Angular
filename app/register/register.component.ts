import { Component, OnInit } from '@angular/core';
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

  constructor(private dataser:DataService, private router:Router) { }

  ngOnInit(): void {
  }
Register(){

  alert("Register Clicked")
  var uname=this.uname;
  var accnum=this.accnum;
  var pswd=this.pswd;

const result=this.dataser.register(uname,accnum,pswd)
if(result){
alert("Successfully Registered......")
this.router.navigateByUrl("")
}
else{
  alert("Account Already Exist, Please Login")
}

}
}
