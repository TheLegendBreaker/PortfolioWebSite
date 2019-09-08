import { Injectable } from '@angular/core';
import * as DLL from '../interface/index';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
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

  constructor() {}

  private initLandingReel(direction: string): void {
    let dll = new DLL.LandingDLL();
    dll = dll.DummyDLL();

    if (direction === 'Right') {
      this.display = dll.getTheFirst();
      this.que[0] = this.display.previous;
      this.que[1] = this.display.next;
    } else {
      this.display = dll.getTheLast();
      this.que[0] = this.display.previous;
      this.que[1] = this.display.next;
    }
  }

  private rotateLandingReel(direction: string): void {
    if (this.display === undefined) {
      this.initLandingReel(direction);
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
    this.rotateLandingReel(direction);
    this.chooseBlurb();
    this.chooseImage();
    this.chooseLinks();
    this.chooseScreen();
    this.lastDirection = direction;
  }
  private chooseScreen(): void {
    if (this.screen1) {
      this.screen1 = false;
    } else {
      this.screen1 = true;
    }
  }
}
