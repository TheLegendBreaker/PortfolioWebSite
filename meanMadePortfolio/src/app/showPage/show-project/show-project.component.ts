import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css'],
})
export class ShowProjectComponent implements OnInit {
  direction: any;
  constructor() {}
  ngOnInit() {}
  scroll(direction: Event): void {
    this.direction = direction;
    console.log(`direction`, direction);
  }
}
