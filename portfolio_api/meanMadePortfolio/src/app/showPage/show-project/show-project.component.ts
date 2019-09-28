import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material';
import { tooltipConfig } from 'src/app/toolTipConfig/toolTip.config.delay';
import { RouteAnimationsService } from 'src/app/services/route-animations.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: tooltipConfig },
  ],
})
export class ShowProjectComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  links: any[];
  display: any[];
  autoNav: any;
  disabler: any;

  navPress = false;
  disablePress = false;

  lastDirection = 'Right';
  errors: string;

  constructor(
    private readonly projServ: ProjectService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly routeAnimationServ: RouteAnimationsService
  ) {
    this.subscription = projServ.useLinks$.subscribe(
      (links: any[]) => {
        this.links = links;
      },
      errors => {
        this.errors = errors.errors;
      }
    );
  }
  ngOnInit(): void {
    this.autoScroll();
  }
  scroll(direction: string): void {
    this.pause();
    this.autoScroll();
    if (!this.disablePress) {
      this.projServ.scroll(direction);
      this.clientNavPress();
    }
    this.lastDirection = direction;
  }

  private autoScroll(): void {
    this.autoNav = setInterval(() => {
      if (!this.navPress) {
        this.projServ.scroll(this.lastDirection);
      }
    }, 3500);
  }
  private clientNavPress(): void {
    this.disabled();
    this.navPress = true;
    setInterval(() => {
      this.navPress = false;
    }, 8000);
  }
  private disabled(): void {
    this.disablePress = true;
    this.clearDisable();
    this.disabler = setInterval(() => {
      this.disablePress = false;
      this.clearDisable();
    }, 510);
  }
  private clearDisable(): void {
    clearInterval(this.disabler);
  }
  pause(): void {
    clearInterval(this.autoNav);
  }
  private navToContact(): void {
    this.routeAnimationServ.changeState();
    this.router.navigateByUrl('/portfolio/contact');
  }
  ngOnDestroy(): void {
    this.projServ.direction = null;
    clearInterval(this.autoNav);
  }
}
