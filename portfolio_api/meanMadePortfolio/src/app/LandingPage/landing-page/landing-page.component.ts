import { ProjectsService } from 'src/app/services/projects.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  // set up a property to display the project blurb
  blurb: string;

  links: any[] = [];
  constructor(private readonly projServ: ProjectsService) {}

  ngOnInit() {
    this.links = [`https://github.com/TheLegendBreaker`];
    this.projServ.useLinks$.subscribe(links => {
      this.links = links;
    });
  }

  scroll(direction: string) {
    console.log('scroll on landing page');
    this.projServ.scroll(direction);
  }
  // build out an autoScroll for the change of reel state.
}
