import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  style,
  state,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-landing-blurb',
  templateUrl: './landing-blurb.component.html',
  styleUrls: ['./landing-blurb.component.css'],
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
export class LandingBlurbComponent implements OnInit {
  @Input() direction: any;
  display: any[] = [];
  que: any[] = [];
  constructor(private readonly projServ: ProjectsService) {}

  ngOnInit() {
    // set up default message.
    this.display = [null, `welcome`, `My name is`, `Hector G. Diaz`, true];
    // get the dsiplay to hold the emitted info so it can be accessed in the html
    this.projServ.displayBlurb$.subscribe(blurb => {
      if (this.projServ.screen1) {
        this.display = blurb;
      } else {
        this.que = blurb;
      }
    });
  }
}
