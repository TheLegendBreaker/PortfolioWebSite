import { ProjectsService } from 'src/app/services/projects.service';
import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { Subscription } from 'rxjs';

import { Transitions } from './reel.transition';

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.css'],
  animations: [
    trigger('screen1', [
      state('slideUptoDisplay', style({ left: '750px' })),
      state('slideDowntoDisplay', style({ left: '750px' })),
      Transitions.screen1UpQ(),
      Transitions.screen1UpD(),
      Transitions.screen1DownQ(),
      Transitions.screen1DownD(),
    ]),
    trigger('screen2', [
      state('slideUptoQue', style({ left: '750px', bottom: '460px' })),
      state('slideDowntoQue', style({ left: '750px', bottom: '460px' })),
      Transitions.screen2UpQ(),
      Transitions.screen2UpD(),
      Transitions.screen2DownQ(),
      Transitions.screen2DownD(),
    ]),
  ],
})
export class ReelComponent implements OnInit, OnDestroy {
  // property to handle state;
  screen: string;
  // a que property to keep track of what state should be next
  que: any[] = [];
  display: any[] = [];
  link: any[] = [];

  subscription: Subscription;

  constructor(private readonly projServ: ProjectsService) {
    this.subscription = projServ.displayImage$.subscribe(image => {
      // make sure the correct prop gets the newly displaying project
      if (this.projServ.screen1) {
        this.display = image;
        console.log('display if triggerd', this.display);
        this.screen = image[2];
      } else {
        console.log('que if triggerd');
        this.que = image;
        this.link = [`project/`, this.que[0]];
        this.screen = image[2];
      }
    });
  }
  ngOnInit() {
    // set up display with welcome information.
    this.display = [
      null,
      `I am a problem solver who is consistently improving the systems I work with. I have brought multiple companies further with these skills. this is my portfolio website and its job is to give working of these skills.`,
      `I have a background in graphic design as freelancer. I have managed independent contracts and produced work that exceeds expectations within a deadline. My graphic design experience also gives me a  creative perspective that helps me rethink challenges and come up with innovative solutions.`,
      `If given the right opportunity at the right company I will exceed your expectations. Let's get together and see if we would be a good fit for each other. `,
    ];

    this.link = [`resume`];
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
