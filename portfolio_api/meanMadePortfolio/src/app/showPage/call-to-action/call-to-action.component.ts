import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

import { Transitions } from './call-to-action.transition';
import { ProjectService } from 'src/app/services/project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css'],
  animations: [
    trigger('callToAction', [
      state('LeftToDisplay', style({ left: '10px', bottom: '1075px' })),
      state('RightToDisplay', style({ left: '10px', bottom: '1075px' })),
      Transitions.leftToQue(),
      Transitions.leftToDisplay(),
      Transitions.rightToQue(),
      Transitions.rightToDisplay(),
    ]),
  ],
})
export class CallToActionComponent implements OnInit, OnDestroy {
  direction: string;
  subscription: Subscription;
  constructor(private readonly projServ: ProjectService) {
    this.subscription = projServ.setDirection$.subscribe(
      (direction: string) => {
        this.direction = direction;
      }
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
