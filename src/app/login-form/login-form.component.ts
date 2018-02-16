import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from '../login.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  log = {};
  name : string;
  password : string;


  constructor(private router : Router, private loginService : LoginService) { }

  ngOnInit() {
  }

  loginUser(){
    // console.log(this.log["name"],this.log["password"]);
    this.name = this.log["name"];
    this.password = this.log["password"];

    if(this.name == "admin" && this.password == "admin" ){
        this.loginService.setUserLoggedIn();
        this.router.navigate(['ques']);
    }


  }

}
