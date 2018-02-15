import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueService} from '../que.service';

@Component({
  selector: 'app-que-create',
  templateUrl: './que-create.component.html',
  styleUrls: ['./que-create.component.css']
})
export class QueCreateComponent implements OnInit {

  que = {};

  constructor(private queService: QueService, private router: Router) { }

  ngOnInit() {
  }

  saveQue() {
    this.queService.saveQue(this.que).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/que-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
