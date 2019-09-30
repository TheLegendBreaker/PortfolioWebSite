import { Injectable } from '@angular/core';
import * as DLL from '../interface';
import { Subject } from 'rxjs';
import { ProjectsDllService } from './projects-dll.service';
import { ProjectsNode } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private imageSource = new Subject<any[]>();
  private blurbSource = new Subject<any[]>();
  private linkSource = new Subject<any[]>();
  private directionSourse = new Subject<any[]>();

  setDirection$ = this.directionSourse.asObservable();
  displayImage$ = this.imageSource.asObservable();
  displayBlurb$ = this.blurbSource.asObservable();
  useLinks$ = this.linkSource.asObservable();

  display: DLL.ProjectsNode;

  screen1 = true;

  // refactor to only use
  direction: string;
  blurbDirection: string;

  constructor(private readonly dllServ: ProjectsDllService) {}

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
      this.blurbDirection,
    ]);
  }
  initContent(projects: ProjectsNode[]) {
    this.display = this.dllServ.initLandingReelContent(projects);
  }
  private initDisplay(direction: string): void {
    if (direction === 'Up') {
      this.display = this.dllServ.rotateNext();
    } else {
      this.display = this.dllServ.rotatePervious();
    }
  }

  private rotateShowReel(direction: string): void {
    if (this.display === undefined) {
      this.initDisplay(direction);
      return;
    }

    if (direction === 'Up') {
      this.display = this.dllServ.rotateNext();
    } else {
      this.display = this.dllServ.rotatePervious();
    }
  }
  scroll(direction: string): void {
    console.log('scroll triggerd');
    this.rotateShowReel(direction);
    this.scrollAnimationState(direction);
    this.chooseBlurb();
    this.chooseImage();
    this.chooseLinks();
    this.chooseScreen();
  }

  private scrollAnimationState(direction: string): void {
    const otherWay: object = { Up: 'Down', Down: 'Up' };

    // set of conditons to figure out what to change state to
    if (this.direction === `slide${direction}toQue`) {
      this.direction = `slide${direction}toDisplay`;
      // eventually refactor so state for is the same for both blurb and reel
      this.blurbDirection = `${direction}ToQue`;
    } else if (this.direction === `slide${otherWay[direction]}toQue`) {
      this.direction = `slide${direction}toDisplay`;
      this.blurbDirection = `${direction}ToQue`;
    } else {
      this.direction = `slide${direction}toQue`;
      this.blurbDirection = `${direction}ToDisplay`;
    }
    console.log('here is the screen2', this.direction);
  }
  private chooseScreen(): void {
    if (this.screen1) {
      this.screen1 = false;
    } else {
      this.screen1 = true;
    }
  }
}
