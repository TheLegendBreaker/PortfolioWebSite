import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { trigger, style, state } from '@angular/animations';
import { ProjectService } from 'src/app/services/project.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
  screen: string;
  direction: string;

  que: any[] = [];
  display: any[] = [];
  links: any[] = [];

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
    // do something with resolver data
    const project = this.route.snapshot.data.projects;
    console.log(`here is the project`, project);
    this.display = [project.id, project.image];

    this.projServ.initShowReel(project);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
