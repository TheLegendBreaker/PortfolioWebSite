import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import * as DLL from '../interface/index';
import { ProjectNode } from '../interface/index';
import { DllService } from './dll.service';

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

  display: DLL.ProjectsNode;

  // boolean to help the reel and blurb decide which of its screens gets content
  screen1 = false;
  calDisplayed = false;

  direction: string;
  constructor(private readonly dllServ: DllService) {}

  initShowReel(project: ProjectNode): DLL.ProjectsNode {
    this.display = this.dllServ.initShowReelContent(project);
    this.chooseBlurb();
    return this.display;
  }
  initBlurb(): DLL.ProjectsNode {
    return this.dllServ.initBlurbContent();
  }
  private rotateLandingReel(direction: string): void {
    if (direction === 'Right') {
      this.display = this.dllServ.rotateNext();
    } else {
      this.display = this.dllServ.rotatePervious();
    }
    console.log('ROTATE REEL', this.display);
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
  private ctaToDisplay(direction: string) {
    this.directionSource.next(`${direction}ToDisplay`);
  }
  private ctaToQue(direction: string) {
    this.directionSource.next(`${direction}ToQue`);
  }

  scroll(direction: string): void {
    this.dllServ.getTheNames();
    console.log('this.display', this.display, !this.calDisplayed);
    if (this.isEnd(direction)) {
      this.scrollAnimation(direction);
      this.ctaToDisplay(direction);
      this.chooseBlurb();
      this.chooseImage();
      this.chooseLinks();
      this.chooseScreen();
      this.rotateLandingReel(direction);
      this.calDisplayed = true;
    } else if (this.calDisplayed) {
      this.scrollAnimation(direction);
      this.ctaToQue(direction);
      this.chooseBlurb();
      this.chooseImage();
      this.chooseLinks();
      this.chooseScreen();
      this.calDisplayed = false;
    } else {
      this.normalScroll(direction);
    }
    console.log(
      '********************************************************************************'
    );
  }

  private normalScroll(direction: string): void {
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
  isEnd(direction: string): boolean {
    let isEnd: boolean;

    if (direction === 'Right') {
      isEnd = this.display.next.place === 0;
    } else if (direction === 'Left') {
      isEnd = this.display.next.previous.place === 0;
    }
    return (isEnd = isEnd ? !this.calDisplayed : false);
  }
  resetContent(): void {
    this.dllServ.reset();
  }
}
