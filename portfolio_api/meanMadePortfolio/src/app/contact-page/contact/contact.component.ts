import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  email: {
    name: string;
    email: string;
    content: string;
  };
  constructor(private readonly emailServ: EmailService) {}
  ngOnInit() {
    this.email = { name: '', email: '', content: '' };
  }

  contact(event: Event) {
    event.preventDefault();
    console.log('here is the data from the from', this.email);
  }
}
