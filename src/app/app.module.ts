import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QueService } from './que.service';
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
    component: QueComponent
  },
  {
    path: 'que-details/:id',
    component: QueDetailComponent
  },
  {
    path: 'que-create',
    component: QueCreateComponent
  },
  {
    path: 'que-edit/:id',
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
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
