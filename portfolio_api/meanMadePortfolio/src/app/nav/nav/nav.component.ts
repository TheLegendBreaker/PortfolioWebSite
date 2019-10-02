import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { RouteAnimationsService } from 'src/app/services/route-animations.service';
import { ProjectApiService } from 'src/app/services/project-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent implements OnInit {
  projIds: number[] = [];
  constructor(
    private readonly router: Router,
    private readonly projApiServ: ProjectApiService,
    private readonly routeAnimationServ: RouteAnimationsService
  ) {}

  ngOnInit() {
    this.projApiServ.getProjects().subscribe(projects => {
      for (const project of projects.projects) {
        this.projIds.push(project.id);
      }
    });
  }
  private navToHome(): void {
    this.routeAnimationServ.changeState();
    this.router.navigateByUrl('/portfolio');
  }
  private navToContact(): void {
    this.routeAnimationServ.changeState();
    this.router.navigateByUrl('/portfolio/contact');
  }
  private navToResume(): void {
    this.routeAnimationServ.changeState();
    this.router.navigateByUrl('/portfolio/resume');
  }
  private navToProject(id: number): void {
    this.routeAnimationServ.changeState();
    this.router.navigateByUrl(`/portfolio/project/${id}`);
  }
}
