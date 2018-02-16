import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  log = {};
  name : string;
  password : string;


  constructor(private router : Router) { }

  ngOnInit() {
  }

  loginUser(){
    // console.log(this.log["name"],this.log["password"]);
    this.name = this.log["name"];
    this.password = this.log["password"];

    if(this.name == "admin" && this.password == "admin" ){
        this.router.navigate(['ques']);
    }


  }

}
