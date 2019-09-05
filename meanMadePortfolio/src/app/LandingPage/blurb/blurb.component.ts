import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  state,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-blurb',
  templateUrl: './blurb.component.html',
  styleUrls: ['./blurb.component.css'],
  animations: [
    trigger('screen1', [
      // end up in the qued position
      state('upToQue', style({ right: '500px' })),
      // end up ih the displayed position
      state('upToDisply', style({ right: '0' })),
      // end up in the qued postion
      state('downToQue', style({ right: '500px' })),
      // end up in the display postion
      state('downToDisplay', style({ right: '0' })),

      transition('* => upToQue', [
        animate(
          '300ms',
          keyframes([style({ right: '0', bottom: '300px', offset: 1 })])
        ),
      ]),
      transition('*=> upToDisplay', [
        animate(
          '300ms',
          keyframes([
            style({ right: '0', bottom: '-300px', offset: 0 }),
            style({ right: '0', bottom: '0', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class BlurbComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
