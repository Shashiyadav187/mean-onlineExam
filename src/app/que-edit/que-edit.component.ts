import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueService } from '../que.service';


@Component({
  selector: 'app-que-edit',
  templateUrl: './que-edit.component.html',
  styleUrls: ['./que-edit.component.css']
})
export class QueEditComponent implements OnInit {

  que = {};

  constructor(private queService: QueService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getQue(this.route.snapshot.params['id']);
  }

  getQue(id) {
    this.queService.showQue(id).then((res) => {
      this.que = res;
      console.log(this.que);
    }, (err) => {
      console.log(err);
    });
  }

  updateQue(id) {
    this.queService.updateQue(id, this.que).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/que-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
