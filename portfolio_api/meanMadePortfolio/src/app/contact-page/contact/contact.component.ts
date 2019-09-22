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
}
