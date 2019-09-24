import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css'],
})
export class ShowProjectComponent implements OnInit, OnDestroy {
  display: any[];
  autoNav: any;
  navPress = false;
  lastDirection = 'Right';
  constructor(
    private readonly projServ: ProjectService,
    private readonly route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.autoScroll();
  }
  scroll(direction: string): void {
    this.projServ.scroll(direction);
    this.clientNavPress();
    this.lastDirection = direction;
    console.log(`direction`, direction);
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
  ngOnDestroy(): void {
    this.projServ.direction = null;
    clearInterval(this.autoNav);
  }
}
