import { MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { SendResumeDialogComponent } from '../send-resume-dialog/send-resume-dialog.component';

@Component({
  selector: 'app-shw-res-send-res-bttn',
  templateUrl: './shw-res-send-res-bttn.component.html',
  styleUrls: ['./shw-res-send-res-bttn.component.css'],
})
export class ShwResSendResBttnComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  OpenDialog() {
    const config = new MatDialogConfig();

    config.disableClose = false;
    config.autoFocus = true;
    config.panelClass = 'panel';
    this.dialog.open(SendResumeDialogComponent, config);
  }
}
