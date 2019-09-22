import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { Email } from 'src/app/interface/index';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  email = new Email();
  errors: string;
  constructor(private readonly emailServ: EmailService) {}
  ngOnInit() {}

  contact(event: Event, emailForm): void {
    event.preventDefault();
    console.log('here is the data from the from', emailForm.value);
    this.emailServ.email = emailForm.value.from;
    emailForm.reset();
  }
  sendResume(event: Event): void {
    if (this.emailServ.email !== null) {
      this.emailServ.sendResume(this.emailServ.email).subscribe(
        result => {
          console.log('here is the result form django', result);
        },
        error => {
          console.log('here is the error', error);
          this.errors = error.error;
        }
      );
    } else {
      return;
    }
  }
}
