import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private isUserLoggedIn;
  private userName;

  constructor() {
    this.isUserLoggedIn = false;
   }

   getUserLoggedIn()
   {
     return this.isUserLoggedIn;
   }
   setUserLoggedIn()
   {
     this.isUserLoggedIn = true;
   }



}
