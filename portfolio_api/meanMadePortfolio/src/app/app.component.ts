import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { Transitions } from './routeAnimations';
import { RouteAnimationsService } from './services/route-animations.service';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      state('next', style({ opacity: 0, transform: 'scale(0)' })),
      state('next1', style({ opacity: 0, transform: 'scale(0)' })),
      Transitions.next1(),
      Transitions.next(),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  constructor(
    private iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer,
    private readonly routeAnimationServ: RouteAnimationsService
  ) {}
  ngOnInit() {
    this.iconRegistry.addSvgIcon(
      'nav',
      this.sanitizer.bypassSecurityTrustResourceUrl('./assets/nav.svg')
    );
  }
  routeAnimationState(): string {
    console.log(
      'route animation state change',
      this.routeAnimationServ.getState()
    );

    return this.routeAnimationServ.getState();
  }
}
