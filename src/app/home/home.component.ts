import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription, Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalSubscription?: Subscription;
  constructor(private routes: ActivatedRoute) {}
  ngOnInit(): void {
    this.routes.data.subscribe((data) => {
      console.log(data);
    });
    // this.intervalSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    let customObservales = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error('count is grater than 4');
        }
        if (count > 2) {
          observer.complete();
        }
        count++;
      }, 1000);
    });
    this.intervalSubscription = customObservales
      .pipe(
        map((data: number) => {
          return 'Count is ' + (data + 1);
        })
      )
      .subscribe(
        (data: any) => {
          // console.log('Count is ' + data);
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          console.log('complited ');
        }
      );
  }
  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
