import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css'],
})
export class ShowProjectComponent implements OnInit, OnDestroy {
  constructor(private readonly projServ: ProjectService) {
    // projServ.initShowReel();
    // console.log(`constructor triggered`, projServ.screen1);
  }
  ngOnInit(): void {
    console.log(`ng on init triggered`, this.projServ.screen1);
    // this.projServ.initShowReel();
  }
  initReel(): void {
    this.projServ.initShowReel();
  }
  scroll(direction: string): void {
    this.projServ.scroll(direction);
    console.log(`direction`, direction);
  }
  ngOnDestroy(): void {
    this.projServ.direction = null;
  }
}
