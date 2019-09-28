import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { RouteAnimationsService } from 'src/app/services/route-animations.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent implements OnInit {
  constructor(
    private readonly routeAnimationServ: RouteAnimationsService,
    private readonly router: Router
  ) {}

  ngOnInit() {}
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
