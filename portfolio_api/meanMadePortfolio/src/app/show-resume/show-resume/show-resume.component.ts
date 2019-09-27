import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { tooltipConfig } from 'src/app/toolTipConfig/reel.tooltip.config.delay';

@Component({
  selector: 'app-show-resume',
  templateUrl: './show-resume.component.html',
  styleUrls: ['./show-resume.component.css'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: tooltipConfig },
  ],
})
export class ShowResumeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
