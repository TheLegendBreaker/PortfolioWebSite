import { Injectable } from '@angular/core';
import * as DLL from '../interface/index';
import { Subject } from 'rxjs';
import { LandingNode } from '../interface/index';

// eventually split into projAnimation.service
// and projContent.service
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private imageSource = new Subject<any[]>();
  private blurbSource = new Subject<any[]>();
  private linkSource = new Subject<any[]>();
  private directionSource = new Subject<string>();

  setDirection$ = this.directionSource.asObservable();
  displayImage$ = this.imageSource.asObservable();
  displayBlurb$ = this.blurbSource.asObservable();
  useLinks$ = this.linkSource.asObservable();

  que: DLL.LandingNode[] = [];
  display: DLL.LandingNode;

  dll = new DLL.LandingDLL();
  // boolean to help the reel and blurb decide which of its screens gets content
  screen1 = false;
  calDisplayed = true;

  direction: string = null;
  constructor() {}

  initShowReel(project: LandingNode): void {
    this.dll = this.dll.DummyDLL();
    this.display = project;
    this.que[0] = this.display.previous;
    this.que[1] = this.display.next;
  }

  private rotateLandingReel(direction: string): void {
    if (direction === 'Right') {
      this.display = this.que[1];
      this.que[0] = this.display.previous;
      this.que[1] = this.display.next;
    } else {
      this.display = this.que[0];
      this.que[0] = this.display.previous;
      this.que[1] = this.display.next;
    }
  }

  private chooseImage() {
    this.imageSource.next([
      this.display.id,
      this.display.image,
      this.direction,
    ]);
  }
  private chooseLinks() {
    this.linkSource.next(this.display.links);
  }
  private chooseBlurb() {
    this.blurbSource.next([
      this.display.id,
      this.display.title,
      this.display.blurb,
      this.direction,
    ]);
  }
  private callToActionState() {
    console.log('here is direction from the cal state', this.direction);
    this.directionSource.next(this.direction);
    // this.chooseScreen();
  }
  scroll(direction: string): void {
    console.log('end', this.isEnd(direction));
    if (this.isEnd(direction)) {
      console.log('if triggered');
      this.calScroll(direction);
      // rotateLandingReel messes with callScroll some how
      this.rotateLandingReel(direction);
      this.calDisplayed = true;
    } else if (this.calDisplayed) {
      console.log('else if triggered');
      this.calScroll(direction);
      this.calDisplayed = false;
    } else {
      console.log('else triggered');
      this.normalScroll(direction);
    }
  }

  private normalScroll(direction: string): void {
    this.rotateLandingReel(direction);
    // console.log(`is end`, this.isEnd(direction));

    this.scrollAnimation(direction);
    this.chooseBlurb();
    this.chooseImage();
    this.chooseLinks();
    this.chooseScreen();
  }
  private calScroll(direction: string): void {
    this.scrollAnimation(direction);
    this.callToActionState();
    this.chooseBlurb();
    this.chooseImage();
    this.chooseLinks();
    this.chooseScreen();
  }
  private scrollAnimation(direction: string): void {
    const otherWay: object = { Right: 'Left', Left: 'Right' };

    if (this.direction === `${direction}ToQue`) {
      this.direction = `${direction}ToDisplay`;
    } else if (this.direction === `${otherWay[direction]}ToQue`) {
      // make sure to que-states are consecutive
      this.direction = `${direction}ToDisplay`;
    } else {
      this.direction = `${direction}ToQue`;
    }
  }
  private chooseScreen(): void {
    if (this.screen1) {
      this.screen1 = false;
    } else {
      this.screen1 = true;
    }
  }
  isEnd(direction: string): boolean {
    // what to do when this is true?
    if (direction === 'Left') {
      return this.que[0].next.next.place === 0;
    } else if (direction === 'Right') {
      return this.que[1].previous.place === 0;
    }
  }
}
