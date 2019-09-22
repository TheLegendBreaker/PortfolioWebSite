import { MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { SendResumeDialogComponent } from '../send-resume-dialog/send-resume-dialog.component';

@Component({
  selector: 'app-send-resume-button',
  templateUrl: './send-resume-button.component.html',
  styleUrls: ['./send-resume-button.component.css'],
})
export class SendResumeButtonComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  OpenDialog() {
    const config = new MatDialogConfig();

    config.disableClose = false;
    config.autoFocus = true;
    config.hasBackdrop = false;

    this.dialog.open(SendResumeDialogComponent, config);
  }
}
