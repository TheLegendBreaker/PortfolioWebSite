import { MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { SendResumeDialogComponent } from '../send-resume-dialog/send-resume-dialog.component';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-send-resume-button',
  templateUrl: './send-resume-button.component.html',
  styleUrls: ['./send-resume-button.component.css'],
})
export class SendResumeButtonComponent implements OnInit {
  errors: string;

  constructor(
    private dialog: MatDialog,
    private readonly emailServ: EmailService
  ) {}

  ngOnInit() {}
  sendOrDialog() {
    if (this.emailServ.email !== null) {
      console.log('if in or triggerd');
      this.sendResume();
    } else {
      this.OpenDialog();
    }
  }
  sendResume(): void {
    this.emailServ.sendResume(this.emailServ.email).subscribe(
      result => {
        console.log('here is the result form django', result);
      },
      error => {
        console.log('here is the error', error);
        this.errors = error.error;
      }
    );
    this.emailServ.email = null;
  }
  OpenDialog() {
    const config = new MatDialogConfig();

    config.disableClose = false;
    config.autoFocus = true;
    config.panelClass = 'panel';
    this.dialog.open(SendResumeDialogComponent, config);
  }
}
