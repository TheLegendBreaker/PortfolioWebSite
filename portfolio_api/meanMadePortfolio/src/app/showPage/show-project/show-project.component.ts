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
  constructor(
    private readonly projServ: ProjectService,
    private readonly route: ActivatedRoute
  ) {}
  ngOnInit(): void {}
  scroll(direction: string): void {
    this.projServ.scroll(direction);
    console.log(`direction`, direction);
  }
  ngOnDestroy(): void {
    this.projServ.direction = null;
  }
}
