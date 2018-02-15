import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { QueService } from '../que.service';


@Component({
  selector: 'app-que-detail',
  templateUrl: './que-detail.component.html',
  styleUrls: ['./que-detail.component.css']
})
export class QueDetailComponent implements OnInit {

  que = {};

  constructor(private route: ActivatedRoute,private router: Router, private queService: QueService) { }

  ngOnInit() {
    this.getQueDetail(this.route.snapshot.params['id']);
  }

  getQueDetail(id) {
    this.queService.showQue(id).then((res) => {
      this.que = res;
      console.log(this.que);
    }, (err) => {
      console.log(err);
    });
  }

  deleteQue(id) {
    this.queService.deleteQue(id).then((result) => {
      this.router.navigate(['/ques']);
    }, (err) => {
      console.log(err);
    });
  }

}
