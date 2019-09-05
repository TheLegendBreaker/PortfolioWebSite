import { Component, OnInit, Input } from '@angular/core';
import { compileDirectiveFromRender2 } from '@angular/compiler/src/render3/view/compiler';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  // set up a property to display the project blurb
  blurb: string;
  // property for main content animation binding
  direction: any;

  constructor() {}

  ngOnInit() {}

  scroll(direction: Event): void {
    this.direction = direction;
    console.log(`here is the direction event: ${this.direction}`);
  }
}
