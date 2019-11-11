import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { RouteAnimationsService } from 'src/app/services/route-animations.service';
import { tooltipConfig } from 'src/app/toolTipConfig/toolTip.config.delay';
import { ProjectApiService } from 'src/app/services/project-api.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { Json } from 'src/app/interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: tooltipConfig },
  ],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  // set up a property to display the project blurb

  lastDirection: string;
  links: any[] = [];
  disable = false;
  navPress = false;
  autoNav: any;
  disabler: any;
  constructor(
    private readonly routeAnimationServ: RouteAnimationsService,
    private readonly projApiServ: ProjectApiService,
    private readonly projServ: ProjectsService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.initProjects();
    this.links = [`https://github.com/TheLegendBreaker`];
    this.projServ.useLinks$.subscribe(links => {
      this.links = links;
    });
  }
  private initProjects(): void {
    this.projApiServ.getProjects().subscribe((projects: Json) => {
      this.projServ.initContent(projects.projects);
    });
  }
  scroll(direction: string) {
    clearInterval(this.autoNav);
    this.autoScroll();
    if (!this.disable) {
      this.clientNavPress();
      this.projServ.scroll(direction);
    }
    this.lastDirection = direction;
  }
  // build out an autoScroll for the change of reel state.
  private autoScroll() {
    this.autoNav = setInterval(() => {
      if (!this.navPress) {
        this.projServ.scroll(this.lastDirection);
      }
    }, 3000);
  }

  private clientNavPress() {
    this.disabled();
    this.navPress = true;
    setInterval(() => {
      this.navPress = false;
    }, 5000);
  }
  private disabled(): void {
    this.disable = true;
    this.clearDisable();
    this.disabler = setInterval(() => {
      this.disable = false;
      this.clearDisable();
    }, 310);
  }
  private clearDisable(): void {
    clearInterval(this.disabler);
  }
  private navToResume() {
    this.routeAnimationServ.changeState();
    this.router.navigateByUrl('/portfolio/resume');
  }
  private pause() {
    clearInterval(this.autoNav);
  }
  ngOnDestroy() {
    clearInterval(this.autoNav);
  }
}
