import { ProjectService } from 'src/app/services/project.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as DLL from '../../interface';
import {
  trigger,
  keyframes,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.css'],
  animations: [
    trigger('screen1', [
      // end up in the qued position
      state('slideUptoDisplay', style({ left: '750px' })),
      // end up in the displayed position
      // end up in the qued postion
      state('slideDowntoDisplay', style({ left: '750px' })),
      // end up the displayed postion

      transition('* => slideUptoQue', [
        animate(
          '300ms',
          keyframes([
            // set up to qued up postion
            style({ left: '35px', bottom: '-500px', offset: 0 }),
            // tells ng how much time the elment should take getting to display postion
            style({ left: '35px', bottom: '0px', offset: 1 }),
          ])
        ),
      ]),
      transition('* => slideUptoDisplay', [
        animate(
          '300ms',
          keyframes([
            // end up at the qued in postion
            style({ left: '35px', bottom: '500px', offset: 1 }),
          ])
        ),
      ]),
      transition('* => slideDowntoQue', [
        animate(
          '300ms',
          keyframes([
            // screen1 qued-up postion { left: 35px, bottom 500px}
            // end up at the qued up postion
            style({ left: '35px', bottom: '500px', offset: 0 }),
            style({ left: '35px', bottom: '0', offset: 1 }),
          ])
        ),
      ]),
      transition('* => slideDowntoDisplay', [
        animate(
          '300ms',
          keyframes([
            // screen1 qued-in postion { left: 35px, top 500px}
            // end up at the qued in postion
            style({ left: '35px', bottom: '0px', offset: 0 }),
            style({ left: '35px', bottom: '-500px', offset: 1 }),
          ])
        ),
      ]),
    ]),
    trigger('screen2', [
      // end up in the qued postion
      state('slideUptoQue', style({ left: '750px', bottom: '460px' })),

      state('slideDowntoQue', style({ left: '750px', bottom: '460px' })),
      // end up the  displayed positon
      transition('* => slideUptoDisplay', [
        animate(
          '300ms',
          keyframes([
            // screen2 qued-up postion { left: 35px, bottom: -50px}
            style({ left: '35px', bottom: '-50px', offset: 0 }),
            // timely move to display postion
            style({ left: '35px', bottom: '460px', offset: 1 }),
          ])
        ),
      ]),
      transition('* => slideUptoQue', [
        animate(
          '300ms',
          keyframes([
            // screen2 qued-in postion { left: 35px, buttom: -50px}
            // end up at the qued in postion
            style({ left: '35px', bottom: '960px', offset: 1 }),
            // style({ left: '750px', bottom: '460px', offset: 0.5 }),
          ])
        ),
      ]),
      transition('* => slideDowntoQue', [
        animate(
          '300ms',
          keyframes([
            // screen2 qued-up postion { left: 35px, buttom: 960px}
            // end up at the qued up postion
            // style({ left: '35px', bottosm: '960px', offset: 0 }),
            style({ left: '35px', bottom: '-50px', offset: 1 }),
          ])
        ),
      ]),
      transition('* => slideDowntoDisplay', [
        animate(
          '300ms',
          keyframes([
            // screen2 qued-in postion { left: 35px, bottom: -50px}
            // end up at the qued in postion
            style({ left: '35px', bottom: '960px', offset: 0 }),
            style({ left: '35px', bottom: '460px', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class ReelComponent implements OnInit {
  // property to handle state;
  screen: string;
  // set up a property to display the project blurb
  blurb: string;
  // a que property to keep track of what state should be next
  que: any[] = [];

  display: any[] = [];
  // an [] of displayProjects to hang on to  the que info

  @Output() navPress = new EventEmitter();

  constructor(private readonly projServ: ProjectService) {}
  ngOnInit() {
    // set up display with welcome information.
    this.display = [
      null,
      ` I am an artist making a career shift into software development`,
      `My objective is to find opportunity to use my skills to meet and exceed expectations.`,
      `In my last two postions I not only met the company's needs but my abilities to learn quickly and problem solve helped the company expand, sometimes into new areas. Mind, those postions were Ceramic Slip Pouring Facility Manager and Cabinet Finishing Shop Manager.`,
      `This is a career change. I haven't written code in a professional environment. I have been writiing code for over a year with independent study, followed by a fourteen week coding bootcamp, at Coding Dojo. I learned three full stacks, MEAN, Django, and Spring Boot.`,
      `I may not have in-the-field expierence, but I do have the basic knowledge, and I have proven that given an opportunity at the right company I can exceed company expectations.`,
      `Lets get together and see if  we would be a good fit for each other.`,
    ];

    this.projServ.displayImage$.subscribe(image => {
      this.que = this.display;
      this.display = image;
    });
  }

  scroll(direction: string): void {
    this.projServ.scroll(direction);
    console.log('here is the display', this.display);
    // set of conditons to figure out what to change state to
    if (this.screen === `slide${direction}toQue`) {
      this.screen = `slide${direction}toDisplay`;
      this.navPress.emit(`${direction}ToQue`);
    } else if (this.screen === null) {
      this.screen = `slide${direction}toDisplay`;
      this.navPress.emit(`${direction}ToQue`);
    } else {
      this.screen = `slide${direction}toQue`;
      this.navPress.emit(`${direction}ToDisplay`);
    }
    console.log('here is the screen2', this.screen);
  }
}
