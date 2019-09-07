import { ProjectService } from 'src/app/services/project.service';
import { Component, OnInit, Input } from '@angular/core';

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

  links: any[] = [];
  constructor(private readonly projServ: ProjectService) {}

  ngOnInit() {
    this.links = [`https://github.com/TheLegendBreaker`];
    this.projServ.useLinks$.subscribe(links => {
      this.links = links;
    });
  }

  scroll(direction: Event): void {
    this.direction = direction;
    console.log(`here is the direction event: ${this.direction}`);
  }
}
