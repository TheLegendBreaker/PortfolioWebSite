import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  state,
  style,
  trigger,
  animate,
  keyframes,
  transition,
} from '@angular/animations';
import { ProjectService } from 'src/app/services/project.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Transitions } from './dedicated-display-content.transition';

@Component({
  selector: 'app-dedicated-display-content',
  templateUrl: './dedicated-display-content.component.html',
  styleUrls: ['./dedicated-display-content.component.css'],
  animations: [
    trigger('screen1', [
      state('LeftToQue', style({ top: '190px' })),
      state('RightToQue', style({ top: '190px' })),
      Transitions.screen1LeftQ(),
      Transitions.screen1LeftD(),
      Transitions.screen1RightQ(),
      Transitions.screen1RightD(),
    ]),
    trigger('screen2', [
      state('LeftToQue', style({ top: '-155px' })),
      state('RightToQue', style({ top: '-155px' })),
      Transitions.screen2LeftQ(),
      Transitions.screen2LeftD(),
      Transitions.screen2RightQ(),
      Transitions.screen2RightD(),
    ]),
  ],
})
export class DedicatedDisplayContentComponent implements OnInit, OnDestroy {
  direction: string;
  que: any[] = [];
  display: any[] = [];
  subscription: Subscription;
  constructor(
    private readonly projServ: ProjectService,
    private readonly route: ActivatedRoute
  ) {
    this.subscription = projServ.displayBlurb$.subscribe(blurb => {
      if (this.projServ.screen1) {
        this.display = blurb;
        this.direction = blurb[3];
      } else {
        this.que = blurb;
        this.direction = blurb[3];
      }
    });
  }
  ngOnInit(): void {
    console.log('HERE IS SCREEN', this.projServ.screen1);
    const project = this.route.snapshot.data.projects;
    console.log(`here is the project`, project);
    this.display = [project.id, project.title, project.blurb];
  }
  ngOnDestroy(): void {
    this.projServ.screen1 = false;
    this.subscription.unsubscribe();
  }
}
