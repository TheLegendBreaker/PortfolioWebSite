import { Injectable } from '@angular/core';

import * as DLL from '../interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsDllService {
  dll = new DLL.ProjectsDLL();
  display: DLL.ProjectsNode;
  constructor() {}
  private jsonToProjectDll(project: DLL.ProjectsNode[]) {
    return this.dll.populateNewList(project);
  }
  private initDisplay() {
    this.display = this.dll.getTheFirst();
  }
  initLandingReelContent(project: DLL.ProjectsNode[]): DLL.ProjectsNode {
    this.jsonToProjectDll(project);
    this.initDisplay();
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
}
