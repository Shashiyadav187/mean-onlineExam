import { Component, OnInit } from '@angular/core';
import { QueService } from "../que.service";

@Component({
  selector: 'app-que',
  templateUrl: './que.component.html',
  styleUrls: ['./que.component.css']
})
export class QueComponent implements OnInit {

  ques: any;

  constructor(private queService : QueService) {  }

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
