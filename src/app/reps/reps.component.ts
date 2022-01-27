import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reps',
  templateUrl: './reps.component.html',
  styleUrls: ['./reps.component.css'],
})
export class RepsComponent implements OnInit {
  pageTitle = 'How Many Reps!';
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  increaseCounter(): void {
    this.counter = this.counter + 1;
  }

  decreaseCounter(): void {
    if (this.counter > 0) {
      this.counter = this.counter - 1;
    }
  }
}
