import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: any;
  postFormGroup: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required),
  });
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getPost();
  }
  getPost() {
    this.http
      .get('https://angular-demo-c8f8f-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((data: any) => {
          let posts = [];
          for (let key in data) {
            posts.push({ ...data[key], key });
          }
          return posts;
        })
      )
      .subscribe((res) => {
        this.posts = res;
        // console.log(res);
      });
  }
  onSubmit() {
    console.log(this.postFormGroup.value);
    const postData = this.postFormGroup.value;
    this.http
      .post(
        'https://angular-demo-c8f8f-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((res) => {
        this.getPost();
        // this.posts = res;
        // console.log(this.posts);
      });
  }
  get f() {
    return this.postFormGroup.controls;
  }
}
