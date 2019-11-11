import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteAnimationsService {
  state = 'next';
  constructor() {}
  changeState() {
    this.state = this.state === 'next' ? 'next1' : 'next';
  }
  getState() {
    return this.state;
  }
}
