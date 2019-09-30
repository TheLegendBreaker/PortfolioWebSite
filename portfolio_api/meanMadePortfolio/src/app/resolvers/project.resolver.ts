import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ProjectApiService } from '../services/project-api.service';
import { ProjectNode } from '../interface';

@Injectable()
export class ProjectResolver implements Resolve<ProjectNode> {
  constructor(private readonly projApiServ: ProjectApiService) {}
  // possibly format all the projects here.
  // or have the project api service handle it.
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProjectNode> {
    return this.projApiServ.getProject(route.params.id);
  }
}
