import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'app-display-main-content',
  templateUrl: './display-main-content.component.html',
  styleUrls: ['./display-main-content.component.css'],
  animations: [
    trigger('screen1', [
      // end up in the qued position
      state('UpToQue', style({ right: '500px' })),
      // end up in the qued postion
      state('DownToQue', style({ right: '500px' })),

      // and the qued elment needs a dipslay state
      // end up ih the displayed position

      transition('* => UpToQue', [
        animate(
          '300ms',
          keyframes([
            style({ color: '#00000000', offset: 0 }),
            style({ color: '#000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => DownToQue', [
        animate(
          '300ms',
          keyframes([
            style({ color: '#000000', offset: 0 }),
            style({ color: '#00000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => UpToDisplay', [
        animate(
          '300ms',
          keyframes([
            style({ color: '#000000', offset: 0 }),
            style({ color: '#00000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => DownToDisplay', [
        animate(
          '300ms',
          keyframes([
            style({ color: '#000000', offset: 0 }),
            style({ color: '#00000000', offset: 1 }),
          ])
        ),
      ]),
    ]),
    trigger('screen2', [
      state('UpToQue', style({ right: '0', bottom: '190.5px' })),
      state('DownToQue', style({ right: '0', bottom: '190.5px' })),

      transition('* => UpToDisplay', [
        animate(
          '300ms',
          keyframes([
            style({ color: '#00000000', offset: 0 }),
            style({ color: '#000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => DownToDisplay', [
        animate(
          '300ms',
          keyframes([
            style({ color: '#00000000', offset: 0 }),
            style({ color: '#000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => UpToQue', [
        animate(
          '300ms',
          keyframes([
            style({ color: '#000000', offset: 0 }),
            style({ color: '#00000000', offset: 1 }),
          ])
        ),
      ]),
      transition('* => DownToQue', [
        animate(
          '300ms',
          keyframes([
            style({ color: '#000000', offset: 0 }),
            style({ color: '#00000000', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class DisplayMainContentComponent implements OnInit {
  @Input() direction: any;
  display: any[];
  que: any[];
  constructor(private readonly projServ: ProjectService) {}

  ngOnInit() {
    // set up default message.
    this.display = [null, null];
    // get the dsiplay to hold the emitted info so it can be accessed in the html
    this.projServ.displayBlurb$.subscribe(blurb => {
      this.que = this.display;
      this.display = blurb;
    });
  }
}
