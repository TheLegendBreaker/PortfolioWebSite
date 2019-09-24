import { ProjectsService } from 'src/app/services/projects.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  // set up a property to display the project blurb
  blurb: string;
  lastDirection = 'Up';
  links: any[] = [];
  navPress = false;
  autoNav: any;
  constructor(private readonly projServ: ProjectsService) {}

  ngOnInit() {
    this.links = [`https://github.com/TheLegendBreaker`];
    this.projServ.useLinks$.subscribe(links => {
      this.links = links;
    });
    this.autoScroll();
  }

  scroll(direction: string) {
    console.log('scroll on landing page');
    this.clientNavPress();
    this.lastDirection = direction;
    this.projServ.scroll(direction);
  }
  // build out an autoScroll for the change of reel state.
  private autoScroll() {
    this.autoNav = setInterval(() => {
      if (!this.navPress) {
        this.projServ.scroll(this.lastDirection);
      }
    }, 5000);
  }

  private clientNavPress() {
    this.navPress = true;
    setInterval(() => {
      this.navPress = false;
    }, 5000);
  }
  ngOnDestroy() {
    clearInterval(this.autoNav);
  }
}
