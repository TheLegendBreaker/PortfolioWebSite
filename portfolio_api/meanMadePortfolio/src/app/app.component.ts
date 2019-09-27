import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { fuzzy } from './routeAnimations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fuzzy],
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  constructor(
    private iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.iconRegistry.addSvgIcon(
      'nav',
      this.sanitizer.bypassSecurityTrustResourceUrl('./assets/nav.svg')
    );
  }
  routeAnimationState(outlet: RouterOutlet) {
    const rAniState = outlet.activatedRouteData.animationState;
    console.log('route animation state changed', rAniState);

    return (
      outlet.activatedRouteData && outlet.activatedRouteData.animationState
    );
  }
}
