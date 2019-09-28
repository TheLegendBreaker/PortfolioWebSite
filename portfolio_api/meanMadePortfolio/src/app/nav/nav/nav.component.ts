import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouteAnimationsService } from 'src/app/services/route-animations.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent implements OnInit {
  constructor(private readonly routeAnimationServ: RouteAnimationsService) {}

  ngOnInit() {}
  navToHome(): void {}
  navToContact(): void {}
  navToResume(): void {}
  navToProject(): void {}
}
