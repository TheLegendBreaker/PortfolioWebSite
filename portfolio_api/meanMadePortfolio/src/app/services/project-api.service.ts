import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectNode, Json } from '../interface';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProjectApiService {
  constructor(private readonly http: HttpClient) {}
  getProjects(): Observable<Json> {
    return this.http.get<Json>('api/projects');
  }
  getProject(id: Params): Observable<ProjectNode> {
    return this.http.get<ProjectNode>(`api/projects/${id}`);
  }
}
