import { LandingDLL, LandingNode } from '../interface/index';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectApiService {
  private projectSource = new Subject<LandingNode>();
  private dll = new LandingDLL();
  getProjects = this.projectSource.asObservable();
  constructor() {}
  getProject(): void {
    this.dll = this.dll.DummyDLL();
    this.projectSource.next(this.dll.getTheFirst());
  }
}
