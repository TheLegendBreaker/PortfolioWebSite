import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  style,
  state,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { ProjectService } from 'src/app/services/project.service';

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
  screen: string;
  direction: string;
  que: any[] = [];
  display: any[] = [];
  links: any[] = [];
  @Output() navPress = new EventEmitter();
  constructor(private readonly projServ: ProjectService) {}
  ngOnInit() {
    this.projServ.scroll('Right');
    this.projServ.displayImage$.subscribe(image => {
      if (this.projServ.screen1) {
        this.display = image;
      } else {
        this.que = image;
      }
    });
  }

  scroll(direction: string): void {
    this.projServ.scroll(direction);
    const otherWay: object = { Right: 'Left', Left: 'Right' };

    if (this.direction === `${direction}ToQue`) {
      this.direction = `${direction}ToDisplay`;
      this.navPress.emit(`${direction}ToDisplay`);
    } else if (this.direction === null) {
      // initialize directioin.
      this.direction = `${direction}ToQue`;
    } else if (this.direction === `${otherWay[direction]}ToQue`) {
      // make sure to que-states are consecutive
      this.direction = `${direction}ToDisplay`;
      this.navPress.emit(`${direction}ToDisplay`);
    } else {
      this.direction = `${direction}ToQue`;
      this.navPress.emit(`${direction}ToQue`);
    }
  }
}
