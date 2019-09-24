import { Injectable } from '@angular/core';
import { LandingDLL, LandingNode } from '../interface/index';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ProjectApiService } from '../services/project-api.service';

@Injectable()
export class ProjectResolver implements Resolve<LandingNode> {
  private projectSource = new Subject<LandingNode>();
  private dll = new LandingDLL();
  private getProjects = this.projectSource.asObservable();

  constructor(private readonly projApiServ: ProjectApiService) {}
  // possibly format all the projects here.
  // or have the project api service handle it.
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<LandingNode> {
    this.dll = this.dll.DummyDLL();
    console.log(`resolver triggered`);

    const project = new Observable<LandingNode>(observer =>
      observer.next(this.dll.getTheFirst())
    );

    return project.pipe(
      take(1),
      map((project: LandingNode) => project)
    );
  }
}
