import { ProjectsService } from 'src/app/services/projects.service';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { Subscription } from 'rxjs';

import { tooltipConfig } from 'src/app/toolTipConfig/reel.tooltip.config.delay';
import { focusTransitions } from './reel.focus.transition';
import { Transitions } from './reel.transition';
import { Router } from '@angular/router';
import { RouteAnimationsService } from 'src/app/services/route-animations.service';

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.css'],
  animations: [
    trigger('screen1', [
      state('slideUptoDisplay', style({ left: '750px' })),
      state('slideDowntoDisplay', style({ left: '750px' })),
      Transitions.screen1UpQ(),
      Transitions.screen1UpD(),
      Transitions.screen1DownQ(),
      Transitions.screen1DownD(),
    ]),
    trigger('screen2', [
      state('slideUptoQue', style({ left: '750px', bottom: '460px' })),
      state('slideDowntoQue', style({ left: '750px', bottom: '460px' })),
      Transitions.screen2UpQ(),
      Transitions.screen2UpD(),
      Transitions.screen2DownQ(),
      Transitions.screen2DownD(),
    ]),
    trigger('intro', [
      state('Next', style({ left: '-664px', bottom: '460px' })),
      state('Pervious', style({ left: '-664px', bottom: '460px' })),
      Transitions.introNextQue(),
      Transitions.introPerviousQue(),
    ]),
    trigger('hover', [
      state('hovered', style({ transform: 'scale(1.1)' })),
      focusTransitions.hovered(),
      focusTransitions.unHovered(),
    ]),
  ],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: tooltipConfig },
  ],
})
export class ReelComponent implements OnInit, OnDestroy {
  // property to handle state;
  screen: string;
  // a que property to keep track of what state should be next
  que: any[] = [];
  display: any[] = [];
  link: string;

  screen1Hover: string;
  screen2Hover: string;
  screenIntro = 'Displayed';

  subscription: Subscription;

  constructor(
    private readonly projServ: ProjectsService,
    private readonly router: Router,
    private readonly routerAnimationServ: RouteAnimationsService
  ) {
    this.subscription = projServ.displayImage$.subscribe(image => {
      this.introState(image[2]);
      // make sure the correct prop gets the newly displaying project
      if (this.projServ.screen1) {
        this.display = image;
        this.screen = image[2];
      } else {
        this.que = image;
        this.screen = image[2];
      }
    });
  }
  ngOnInit() {
    // set up display with welcome information.
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private introState(direction: string): void {
    const introState = {
      slideUptoQue: 'Pervious',
      slideDowntoQue: 'Next',
      slideUptoDisplay: 'Pervious',
      slideDowntoDisplay: 'Next',
    };
    this.screenIntro = introState[direction];
  }
  hovered() {
    this.screen1Hover = 'hovered';
  }
  unHovered() {
    this.screen1Hover = 'unhovered';
  }
  screen2Hovered() {
    this.screen2Hover = 'hovered';
  }
  screen2UnHovered() {
    this.screen2Hover = 'unhovered';
  }
  private navToResume(): void {
    this.routerAnimationServ.changeState();
    this.router.navigateByUrl(`/portfolio/resume`);
  }
  private navToProjectDisplay(): void {
    // this.routerAnimationServ.changeState();
    // this.router.navigateByUrl(`/portfolio/project/${this.display[0]}`);
  }
  private navToProjectQue(): void {
    // this.routerAnimationServ.changeState();
    // this.router.navigateByUrl(`/portfolio/project/${this.que[0]}`);
  }
}
