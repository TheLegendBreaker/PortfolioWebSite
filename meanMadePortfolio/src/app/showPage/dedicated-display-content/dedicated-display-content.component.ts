import { Component, OnInit, Input } from '@angular/core';
import {
  state,
  style,
  trigger,
  animate,
  keyframes,
  transition,
} from '@angular/animations';

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
      state('LeftToQue', style({ top: '-57px' })),
      state('RightToQue', style({ top: '-57px' })),
      transition('* => LeftToQue', [
        animate(
          '500ms',
          keyframes([
            style({ color: '#00000000', top: '-57px', offset: 0 }),
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
            style({ color: '#00000000', top: '-57px', offset: 0 }),
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
export class DedicatedDisplayContentComponent implements OnInit {
  @Input() direction: any;
  constructor() {}

  ngOnInit() {}
}
