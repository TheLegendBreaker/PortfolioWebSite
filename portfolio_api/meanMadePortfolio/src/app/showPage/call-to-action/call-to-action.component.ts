import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

import { Transitions } from './call-to-action.transition';
import { ProjectService } from 'src/app/services/project.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { RouteAnimationsService } from 'src/app/services/route-animations.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css'],
  animations: [
    trigger('callToAction', [
      state('LeftToDisplay', style({ left: '10px', bottom: '1060px' })),
      state('RightToDisplay', style({ left: '10px', bottom: '1060px' })),
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
  constructor(
    private readonly router: Router,
    private readonly projServ: ProjectService,
    private readonly routeAnimation: RouteAnimationsService
  ) {
    this.subscription = projServ.setDirection$.subscribe(
      (direction: string) => {
        this.direction = direction;
        console.log('cta direction', this.direction);
      }
    );
  }

  ngOnInit() {}
  private navToNext(): void {
    this.routeAnimation.changeState();
    this.router.navigateByUrl(`/portfolio/project/`);
  }
  private navToContact() {
    this.routeAnimation.changeState();
    this.router.navigateByUrl('/portfolio/contact');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
