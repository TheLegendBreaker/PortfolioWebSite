import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { tooltipConfig } from 'src/app/toolTipConfig/reel.tooltip.config.delay';
import { RouteAnimationsService } from 'src/app/services/route-animations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-resume',
  templateUrl: './show-resume.component.html',
  styleUrls: ['./show-resume.component.css'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: tooltipConfig },
  ],
})
export class ShowResumeComponent implements OnInit {
  constructor(
    private readonly routeAnimationServ: RouteAnimationsService,
    private router: Router
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
}
