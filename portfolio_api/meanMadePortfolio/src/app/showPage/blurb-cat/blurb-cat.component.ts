import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProjectService } from 'src/app/services/project.service';
import { trigger, state, style } from '@angular/animations';
import { Transitions } from './blurb-cat.transition';

@Component({
  selector: 'app-blurb-cat',
  templateUrl: './blurb-cat.component.html',
  styleUrls: ['./blurb-cat.component.css'],
  animations: [
    trigger('callToAction', [
      state('LeftToDisplay', style({ bottom: '310px' })),
      state('RightToDisplay', style({ bottom: '310px' })),
      Transitions.leftToQue(),
      Transitions.leftToDisplay(),
      Transitions.rightToQue(),
      Transitions.rightToDisplay(),
    ]),
  ],
})
export class BlurbCATComponent implements OnInit, OnDestroy {
  fade: string;
  subscription: Subscription;
  constructor(private readonly projServ: ProjectService) {
    this.subscription = projServ.setDirection$.subscribe((fade: string) => {
      this.fade = fade;
    });
  }

  ngOnInit() {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
