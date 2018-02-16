import { Component, OnInit } from '@angular/core';
import { QueService } from "../que.service";
import { LoginService } from "../login.service";

@Component({
  selector: 'app-que',
  templateUrl: './que.component.html',
  styleUrls: ['./que.component.css']
})
export class QueComponent implements OnInit {

  ques: any;

  constructor(private queService : QueService,private loginService : LoginService) {  }

  ngOnInit() {
    this.getQueList()
  }

  getQueList() {
    this.queService.getAllQues().then((res) => {
      this.ques = res;
    }, (err) => {
      console.log(err);
    });
  }

}
