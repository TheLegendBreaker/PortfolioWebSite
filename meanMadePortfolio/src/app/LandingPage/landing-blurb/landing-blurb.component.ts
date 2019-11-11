import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  trigger,
  style,
  state,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { ProjectsService } from 'src/app/services/projects.service';
import { Subscription } from 'rxjs';

import { Transitions } from './landing-blurb.transition';

@Component({
  selector: 'app-landing-blurb',
  templateUrl: './landing-blurb.component.html',
  styleUrls: ['./landing-blurb.component.css'],
  animations: [
    trigger('screen1', [
      state('UpToQue', style({ right: '500px' })),
      state('DownToQue', style({ right: '500px' })),
      Transitions.screen1UpQ(),
      Transitions.screen1UpD(),
      Transitions.screen1DownQ(),
      Transitions.screen1DownD(),
    ]),
    trigger('screen2', [
      state('UpToQue', style({ right: '0', bottom: '190.5px' })),
      state('DownToQue', style({ right: '0', bottom: '190.5px' })),

      Transitions.screen2UpD(),
      Transitions.screen2UpQ(),
      Transitions.screen2DownD(),
      Transitions.screen2DownQ(),
    ]),
  ],
})
export class LandingBlurbComponent implements OnInit, OnDestroy {
  direction: string;
  display: any[] = [];
  que: any[] = [];

  subscribtion: Subscription;

  constructor(private readonly projServ: ProjectsService) {
    this.subscribtion = projServ.displayBlurb$.subscribe(blurb => {
      if (this.projServ.screen1) {
        this.display = blurb;
        this.direction = blurb[3];
      } else {
        this.que = blurb;
        this.direction = blurb[3];
      }
    });
  }

  ngOnInit() {
    // set up default message.
    this.display = [null, `welcome`, `My name is`, `Hector G. Diaz`, true];
    // get the dsiplay to hold the emitted info so it can be accessed in the html
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
