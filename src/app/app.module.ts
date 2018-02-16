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

const ROUTES = [
  {
    path: '',
    redirectTo: '/ques',
    pathMatch: 'full'
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
