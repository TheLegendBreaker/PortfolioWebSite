import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectNode } from '../interface';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProjectApiService {
  constructor(private readonly http: HttpClient) {}
  getProjects(): Observable<object[]> {
    return this.http.get<object[]>('api/projects');
  }
  getProject(id: Params): Observable<ProjectNode> {
    return this.http.get<ProjectNode>(`api/projects/${id}`);
  }
}
