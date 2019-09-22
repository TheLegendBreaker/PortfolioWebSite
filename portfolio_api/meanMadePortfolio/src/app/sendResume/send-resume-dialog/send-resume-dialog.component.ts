import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Email } from 'src/app/interface';

@Component({
  selector: 'app-send-resume-dialog',
  templateUrl: './send-resume-dialog.component.html',
  styleUrls: ['./send-resume-dialog.component.css'],
})
export class SendResumeDialogComponent implements OnInit {
  email = new Email();
  constructor(private dialogRef: MatDialogRef<SendResumeDialogComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
