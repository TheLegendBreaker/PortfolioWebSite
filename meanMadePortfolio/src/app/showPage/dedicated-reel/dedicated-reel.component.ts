import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  style,
  state,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-dedicated-reel',
  templateUrl: './dedicated-reel.component.html',
  styleUrls: ['./dedicated-reel.component.css'],
  animations: [
    trigger('screen1', [
      state('LeftToQue', style({ right: '0px', bottom: '-560px' })),
      state('RightToQue', style({ right: '0px', bottom: '-560px' })),
      transition('* => LeftToQue', [
        animate(
          '500ms',
          keyframes([
            // style({ right: '0', bottom: '0', offset: 0 }),
            style({ right: '1170px', offset: 1 }),
          ])
        ),
      ]),
      transition('* => RightToQue', [
        animate(
          '500ms',
          keyframes([
            // style({ right: '0', bottom: '0', offset: 0 }),
            style({ left: '1170px', offset: 1 }),
          ])
        ),
      ]),
      transition('* => LeftToDisplay', [
        animate(
          '500ms',
          keyframes([
            style({ left: '1170px', bottom: '0', offset: 0 }),
            style({ left: '0', offset: 1 }),
          ])
        ),
      ]),
      transition('* => RightToDisplay', [
        animate(
          '500ms',
          keyframes([
            style({ right: '1170px', bottom: '0', offset: 0 }),
            style({ right: '0', offset: 1 }),
          ])
        ),
      ]),
    ]),
    trigger('screen2', [
      state('LeftToQue', style({ bottom: '530px' })),
      state('RightToQue', style({ bottom: '530px' })),
      transition('* => LeftToDisplay', [
        animate('500ms', keyframes([style({ right: '1170px', offset: 1 })])),
      ]),
      transition('* => RightToDisplay', [
        animate('500ms', keyframes([style({ left: '1170px', offset: 1 })])),
      ]),
      transition('* => LeftToQue', [
        animate(
          '500ms',
          keyframes([
            style({ left: '1170px', bottom: '530px', offset: 0 }),
            style({ left: '0', bottom: '530px', offset: 1 }),
          ])
        ),
      ]),
      transition('* => RightToQue', [
        animate(
          '500ms',
          keyframes([
            style({ right: '1170px', bottom: '530px', offset: 0 }),
            style({ right: '0', bottom: '530px', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class DedicatedReelComponent implements OnInit {
  constructor() {}
  screen: string;
  direction: string;
  @Output() navPress = new EventEmitter();
  ngOnInit() {}

  scroll(direction: string): void {
    if (this.direction === `${direction}ToQue`) {
      this.direction = `${direction}ToDisplay`;
      this.navPress.emit(`${direction}ToDisplay`);
    } else if (this.direction === null) {
      this.direction = `${direction}ToQue`;
    } else {
      this.direction = `${direction}ToQue`;
      this.navPress.emit(`${direction}ToQue`);
    }
  }
}
