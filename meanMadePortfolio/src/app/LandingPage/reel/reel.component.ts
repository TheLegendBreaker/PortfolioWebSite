import { ProjectsService } from 'src/app/services/projects.service';
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
  // a que property to keep track of what state should be next
  que: any[] = [];

  display: any[] = [];

  screen1 = true;
  link: any[] = [];
  // eventualy refactor so this is handled by the project service
  @Output() navPress = new EventEmitter();

  constructor(private readonly projServ: ProjectsService) {}
  ngOnInit() {
    // set up display with welcome information.
    this.display = [
      null,
      `I am a problem solver who is consistently improving the systems I work with. I have brought multiple companies further with these skills. this is my portfolio website and its job is to give working of these skills.`,
      `I have a background in graphic design as freelancer. I have managed independent contracts and produced work that exceeds expectations within a deadline. My graphic design experience also gives me a  creative perspective that helps me rethink challenges and come up with innovative solutions.`,
      `If given the right opportunity at the right company I will exceed your expectations. Let's get together and see if we would be a good fit for each other. `,
    ];

    this.link = [`resume`];
    this.projServ.displayImage$.subscribe(image => {
      // make sure the correct prop gets the newly displaying project
      if (this.projServ.screen1) {
        console.log('display if triggerd');
        this.display = image;
      } else {
        console.log('que if triggerd');
        this.que = image;
        this.link = [`project/`, this.que[0]];
      }
    });
  }
  // helper function to help specific transitions of state work as expected
  scroll(direction: string): void {
    const otherWay: object = { Up: 'Down', Down: 'Up' };

    console.log('here is what is in display', this.display);
    // set of conditons to figure out what to change state to
    if (this.screen === `slide${direction}toQue`) {
      this.screen = `slide${direction}toDisplay`;
      this.navPress.emit(`${direction}ToQue`);
    } else if (this.screen === null) {
      this.screen = `slide${direction}toDisplay`;
      this.navPress.emit(`${direction}ToQue`);
    } else if (this.screen === `slide${otherWay[direction]}toQue`) {
      this.screen = `slide${direction}toDisplay`;
      this.navPress.emit(`${direction}ToQue`);
    } else {
      this.screen = `slide${direction}toQue`;
      this.navPress.emit(`${direction}ToDisplay`);
    }
    this.projServ.scroll(direction);
    console.log('here is the screen2', this.screen);
  }
}
