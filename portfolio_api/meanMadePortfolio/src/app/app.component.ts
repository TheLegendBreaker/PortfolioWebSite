import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
}
