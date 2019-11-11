import { Injectable } from '@angular/core';

import * as DLL from '../interface';

@Injectable({
  providedIn: 'root',
})
export class DllService {
  dll = new DLL.ProjectsDLL();
  display: DLL.ProjectsNode;
  constructor() {}

  private jsonToProjectsDll(project: DLL.ProjectNode) {
    return this.dll.projectPopulateList(project);
  }
  private initDisplay() {
    this.display = this.dll.getTheFirst();
  }
  initShowReelContent(project: DLL.ProjectNode): DLL.ProjectsNode {
    this.jsonToProjectsDll(project);
    this.initDisplay();
    return this.display;
  }
  initBlurbContent(): DLL.ProjectsNode {
    return this.display;
  }
  rotateNext(): DLL.ProjectsNode {
    this.display = this.display.next;
    return this.display;
  }
  rotatePervious(): DLL.ProjectsNode {
    this.display = this.display.previous;
    return this.display;
  }
  reset(): void {
    this.display = null;
    this.dll = new DLL.ProjectsDLL();
  }
  getTheNames(): void {
    this.dll.printAllTitles();
  }
}
