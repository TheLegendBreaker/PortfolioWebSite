import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, state } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProjectService } from 'src/app/services/project.service';
import { Transitions } from './dedicated-reel.transition';

@Component({
  selector: 'app-dedicated-reel',
  templateUrl: './dedicated-reel.component.html',
  styleUrls: ['./dedicated-reel.component.css'],
  animations: [
    trigger('screen1', [
      state('LeftToQue', style({ right: '0px', bottom: '-560px' })),
      state('RightToQue', style({ right: '0px', bottom: '-560px' })),
      Transitions.screen1LeftQ(),
      Transitions.screen1RightQ(),
      Transitions.screen1LeftD(),
      Transitions.screen1RightD(),
    ]),
    trigger('screen2', [
      state('LeftToQue', style({ bottom: '530px' })),
      state('RightToQue', style({ bottom: '530px' })),
      Transitions.screen2LeftD(),
      Transitions.screen2RightD(),
      Transitions.screen2LeftQ(),
      Transitions.screen2RightQ(),
    ]),
  ],
})
export class DedicatedReelComponent implements OnInit, OnDestroy {
  callToAction: string;
  direction: string;

  que: any[] = [];
  display: any[] = [];

  subscription: Subscription;

  constructor(
    private readonly projServ: ProjectService,
    private readonly route: ActivatedRoute
  ) {
    console.log(`REEL CONSTRUCTOR`, this.display);
    this.subscription = projServ.displayImage$.subscribe(image => {
      if (this.projServ.screen1) {
        this.display = image;
        this.direction = image[2];
      } else {
        this.que = image;
        this.direction = image[2];
      }
    });
  }
  ngOnInit() {
    const projects = this.route.snapshot.data.projects;
    console.log(`here is the project`, projects);
    const display = this.projServ.initShowReel(projects.project);

    this.display = [display.id, display.image];
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
