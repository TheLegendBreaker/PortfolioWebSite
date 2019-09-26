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

  navPress = false;
  ends = false;

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
    this.projServ.scroll(direction);
    this.clientNavPress();
    this.lastDirection = direction;
    console.log(`direction`, direction);

    // will need to make a helper function to do something when at one end of the dll.
    // it could flip a boolean that is checked in the tag of the app
    // would also need to figure out how to pause and handle the service when this component is up.
    // problems is how do I now if I am at the edge?
  }

  private autoScroll() {
    this.autoNav = setInterval(() => {
      if (!this.navPress) {
        this.projServ.scroll(this.lastDirection);
      }
    }, 3500);
  }
  private clientNavPress() {
    this.navPress = true;
    setInterval(() => {
      this.navPress = false;
    }, 8000);
  }
  pause(): void {
    clearInterval(this.autoNav);
  }
  ngOnDestroy(): void {
    this.projServ.direction = null;
    clearInterval(this.autoNav);
  }
}
