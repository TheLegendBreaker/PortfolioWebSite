import { Injectable } from '@angular/core';
import * as DLL from '../interface/index';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
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
  private initShowReel(direction: string): void {
    let dll = new DLL.LandingDLL();
    dll = dll.DummyDLL();

    if (direction === 'Up') {
      this.display = dll.getTheFirst();
      this.que[0] = this.display.previous;
      this.que[1] = this.display.next;
    } else {
      this.display = dll.getTheLast();
      this.que[0] = this.display.previous;
      this.que[1] = this.display.next;
    }
  }

  private rotateShowReel(direction: string): void {
    if (this.display === undefined) {
      this.initShowReel(direction);
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
  scroll(direction: string): void {
    console.log('scroll triggerd');
    this.rotateShowReel(direction);
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
