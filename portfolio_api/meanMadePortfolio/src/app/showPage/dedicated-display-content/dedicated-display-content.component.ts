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

@Component({
  selector: 'app-dedicated-display-content',
  templateUrl: './dedicated-display-content.component.html',
  styleUrls: ['./dedicated-display-content.component.css'],
  animations: [
    trigger('screen1', [
      state('LeftToQue', style({ top: '190px' })),
      state('RightToQue', style({ top: '190px' })),
      transition('* => LeftToQue', [
        animate(
          '500ms',
          keyframes([
            style({ color: '#000000', offset: 0 }),
            style({ color: '#00000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => LeftToDisplay', [
        animate(
          '500ms',
          keyframes([
            style({ color: '#00000000', top: '0', offset: 0 }),
            style({ color: '#000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => RightToQue', [
        animate(
          '500ms',
          keyframes([
            style({ color: '#000000', offset: 0 }),
            style({ color: '#00000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => RightToDisplay', [
        animate(
          '500ms',
          keyframes([
            style({ color: '#00000000', top: '0', offset: 0 }),
            style({ color: '#000000', offset: 1 }),
          ])
        ),
      ]),
    ]),
    trigger('screen2', [
      state('LeftToQue', style({ top: '-155px' })),
      state('RightToQue', style({ top: '-155px' })),
      transition('* => LeftToQue', [
        animate(
          '500ms',
          keyframes([
            style({ color: '#00000000', top: '-155px', offset: 0 }),
            style({ color: '#000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => LeftToDisplay', [
        animate(
          '500ms',
          keyframes([
            style({ color: '#000000', offset: 0 }),
            style({ color: '#00000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => RightToQue', [
        animate(
          '500ms',
          keyframes([
            style({ color: '#00000000', top: '-155px', offset: 0 }),
            style({ color: '#000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => RightToDisplay', [
        animate(
          '500ms',
          keyframes([
            style({ color: '#000000', offset: 0 }),
            style({ color: '#00000000', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class DedicatedDisplayContentComponent implements OnInit, OnDestroy {
  direction: string;
  que: any[] = [];
  display: any[] = [];
  subscription: Subscription;
  constructor(private readonly projServ: ProjectService) {
    // projServ.initShowReel();
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
    // this.projServ.initShowReel();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
