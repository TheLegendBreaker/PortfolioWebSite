import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Email } from 'src/app/interface';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-send-resume-dialog',
  templateUrl: './send-resume-dialog.component.html',
  styleUrls: ['./send-resume-dialog.component.css'],
})
export class SendResumeDialogComponent implements OnInit {
  email = new Email();
  errors: string;
  constructor(
    private dialogRef: MatDialogRef<SendResumeDialogComponent>,
    private readonly emailServ: EmailService
  ) {}

  ngOnInit() {}

  close(form) {
    console.log('here is the data from the form', form.value);
    this.emailServ.email = null;
    this.dialogRef.close();
  }
}
