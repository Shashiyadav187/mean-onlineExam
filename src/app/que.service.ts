import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QueService {

  constructor(private http: Http) { }

  getAllQues() {
    return new Promise((resolve, reject) => {
      this.http.get('/qie')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showQue(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/que/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveQue(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/que', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateQue(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/que/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteQue(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/que/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}