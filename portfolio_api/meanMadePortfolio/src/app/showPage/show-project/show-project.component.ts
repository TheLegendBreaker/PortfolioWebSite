import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css'],
})
export class ShowProjectComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  links: any[];
  display: any[];
  autoNav: any;
  disabler: any;

  navPress = false;
  disablePress = false;

  lastDirection = 'Right';
  errors: string;

  constructor(
    private readonly projServ: ProjectService,
    private readonly route: ActivatedRoute
  ) {
    this.subscription = projServ.useLinks$.subscribe(
      (links: any[]) => {
        this.links = links;
      },
      errors => {
        this.errors = errors.errors;
      }
    );
  }
  ngOnInit(): void {
    this.autoScroll();
  }
  scroll(direction: string): void {
    this.pause();
    this.autoScroll();
    if (!this.disablePress) {
      this.projServ.scroll(direction);
      this.clientNavPress();
    }
    this.lastDirection = direction;
  }

  private autoScroll(): void {
    this.autoNav = setInterval(() => {
      if (!this.navPress) {
        this.projServ.scroll(this.lastDirection);
      }
    }, 3500);
  }
  private clientNavPress(): void {
    this.disabled();
    this.navPress = true;
    setInterval(() => {
      this.navPress = false;
    }, 8000);
  }
  private disabled(): void {
    this.disablePress = true;
    this.clearDisable();
    this.disabler = setInterval(() => {
      this.disablePress = false;
      this.clearDisable();
    }, 510);
  }
  private clearDisable(): void {
    clearInterval(this.disabler);
  }
  pause(): void {
    clearInterval(this.autoNav);
  }
  ngOnDestroy(): void {
    this.projServ.direction = null;
    clearInterval(this.autoNav);
  }
}
