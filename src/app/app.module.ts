import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QueService } from './que.service';
import {LoginService } from './login.service'
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QueComponent } from './que/que.component';
import { QueCreateComponent } from './que-create/que-create.component';
import { QueDetailComponent } from './que-detail/que-detail.component';
import { QueEditComponent } from './que-edit/que-edit.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { LogAuthGuard } from './log-auth.guard';

const ROUTES = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'ques',
    canActivate : [LogAuthGuard],
    component: QueComponent
  },
  {
    path: 'que-details/:id',
    canActivate : [LogAuthGuard],
    component: QueDetailComponent
  },
  {
    path: 'que-create',
    canActivate : [LogAuthGuard],
    component: QueCreateComponent
  },
  {
    path: 'que-edit/:id',
    canActivate : [LogAuthGuard],
    component: QueEditComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QueComponent,
    QueCreateComponent,
    QueDetailComponent,
    QueEditComponent,
    LoginFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    QueService,
    LoginService,
    LogAuthGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
