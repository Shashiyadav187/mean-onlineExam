import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';



@Injectable()
export class LoginService {

  private isUserLoggedIn;
  private userName;

  user = {};

  constructor(private router : Router,private http : Http) {
    this.isUserLoggedIn = false;
   }

   getUserLoggedIn()
   {
     return this.isUserLoggedIn;
   }
   setUserLoggedIn(log)
   {
    // console.log(this.log["name"],this.log["password"]);
    // this.name = this.log["name"];
    // this.password = this.log["password"];

    // if(this.name == "admin" && this.password == "admin" ){
    //     this.loginService.setUserLoggedIn();
    //     this.router.navigate(['ques']);
    //}

    this.user = new Promise((resolve, reject) => {
      this.http.get('/user/' + log["name"])
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
        reject(err);
      });
    });

    console.log(this.user);
    
    this.isUserLoggedIn = true;
    //this.router.navigate(['ques']);
   }

   hello()
   {
     return true;
   }


}
