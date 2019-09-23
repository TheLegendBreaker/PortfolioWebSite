import { Injectable } from '@angular/core';
import * as DLL from '../interface/index';
import { Subject } from 'rxjs';

// eventually split into projAnimation.service
// and projContent.service
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private imageSource = new Subject<any[]>();
  private blurbSource = new Subject<any[]>();
  private linkSource = new Subject<any[]>();
  private directionSource = new Subject<string[]>();

  setDirection$ = this.directionSource.asObservable();
  displayImage$ = this.imageSource.asObservable();
  displayBlurb$ = this.blurbSource.asObservable();
  useLinks$ = this.linkSource.asObservable();

  que: DLL.LandingNode[] = [];
  display: DLL.LandingNode;

  dll = new DLL.LandingDLL();
  // boolean to help the reel and blurb decide which of its screens gets content
  screen1 = false;

  direction: string = null;
  constructor() {}

  initShowReel(): void {
    // reset the direction

    console.log(`init reel triggerd`, this.direction);
    // let dll = new DLL.LandingDLL();
    this.dll = this.dll.DummyDLL();

    this.display = this.dll.getTheFirst();
    this.que[0] = this.display.previous;
    this.que[1] = this.display.next;

    this.chooseBlurb();
    this.chooseImage();
    this.chooseLinks();
    this.chooseScreen();
  }

  private rotateLandingReel(direction: string): void {
    console.log(`rotate reel triggerd`);

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

  scroll(direction: string): void {
    this.rotateLandingReel(direction);
    this.scrollAnimation(direction);
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
}
