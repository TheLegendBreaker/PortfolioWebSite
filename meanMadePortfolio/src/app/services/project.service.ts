import { Injectable } from '@angular/core';
import * as DLL from '../interface/index';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private dll: DLL.LandingDLL;
  private imageSource = new Subject<any[]>();
  private blurbSource = new Subject<any[]>();
  private linkSource = new Subject<any[]>();
  displayImage$ = this.imageSource.asObservable();
  displayBlurb$ = this.blurbSource.asObservable();
  useLinks$ = this.linkSource.asObservable();
  que: DLL.LandingNode[] = [];
  display: DLL.LandingNode;

  screen1 = true;
  lastDirection: string;
  direction: string;

  constructor() {
    this.dll = this.landingDummyDLL();
  }

  private initShowReel(direction: string): void {
    if (direction === 'Right') {
      this.display = this.dll.getTheFirst();
      this.que[0] = this.display.previous;
      this.que[1] = this.display.next;
    } else {
      this.display = this.dll.getTheLast();
      this.que[0] = this.display.previous;
      this.que[1] = this.display.next;
    }
  }

  private rotateShowReel(direction: string): void {
    if (this.display === undefined) {
      this.initShowReel(direction);
      return;
    }

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
  private initLandingReel(direction: string): void {
    if (direction === 'Up') {
      this.display = this.dll.getTheFirst();
      this.que[0] = this.display.previous;
      this.que[1] = this.display.next;
    } else {
      this.display = this.dll.getTheLast();
      this.que[0] = this.display.previous;
      this.que[1] = this.display.next;
    }
  }

  private rotateLandingReel(direction: string): void {
    if (this.display === undefined) {
      this.initLandingReel(direction);
      return;
    }

    if (direction === 'Up') {
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
    this.imageSource.next([this.display.id, this.display.image]);
  }
  private chooseLinks() {
    this.linkSource.next(this.display.links);
  }
  private chooseBlurb() {
    this.blurbSource.next([
      this.display.id,
      this.display.title,
      this.display.blurb,
    ]);
  }

  scroll(direction: string): void {
    this.screen1 = this.switchScreen(direction);
    this.rotateLandingReel(direction);
    this.chooseBlurb();
    this.chooseImage();
    this.chooseLinks();
    this.chooseScreen(direction);
    this.lastDirection = direction;
  }

  showScroll(direction: string): void {
    this.rotateShowReel(direction);
    this.chooseBlurb();
    this.chooseImage();
    this.chooseLinks();
  }

  private chooseScreen(direction: string) {
    if (this.screen1) {
      this.screen1 = false;
    } else {
      this.screen1 = true;
    }
  }
  private switchScreen(direction: string): boolean {
    if (direction === `Up` && this.lastDirection === `Down`) {
      return true;
    }
    if (direction === 'Down' && this.lastDirection === 'Up') {
      return true;
    }
    return this.screen1;
  }
  private landingDummyProj(): DLL.LandingNode[] {
    const projects: DLL.LandingNode[] = [];
    for (let i = 0; i < 4; i++) {
      const project: DLL.LandingNode = new DLL.LandingNode(
        i,
        i,
        `PROJECT ${i}`,
        `this is the project. here's what I did.`,
        `image${i}`,
        [`link${i}`, `link${i + 1}`, `link${i + 2}`]
      );

      projects.push(project);
    }
    return projects;
  }

  // eventually make this method private
  private landingDummyDLL() {
    const dll: DLL.LandingDLL = new DLL.LandingDLL();
    dll.populateNewList(this.landingDummyProj());
    return dll;
  }
}
