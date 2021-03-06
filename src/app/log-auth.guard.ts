import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

@Injectable()
export class LogAuthGuard implements CanActivate {

  constructor(private loginService : LoginService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.getUserLoggedIn();
  }
}
