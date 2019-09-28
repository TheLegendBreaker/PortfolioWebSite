import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { Email } from 'src/app/interface/index';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material';
import { tooltipConfig } from 'src/app/toolTipConfig/toolTip.config.delay';
import { RouteAnimationsService } from 'src/app/services/route-animations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: tooltipConfig },
  ],
})
export class ContactComponent implements OnInit {
  email = new Email();
  errors: string;
  constructor(
    private readonly emailServ: EmailService,
    private readonly routeAnimationServ: RouteAnimationsService,
    private readonly router: Router
  ) {}
  ngOnInit() {}

  contact(event: Event, emailForm): void {
    event.preventDefault();
    console.log('here is the data from the from', emailForm.value);
    this.emailServ.email = emailForm.value;
    this.emailServ.contact(emailForm.value).subscribe(
      result => {
        console.log('here is the result from contact', result);
      },
      error => {
        this.errors = error.errors;
      }
    );
    emailForm.reset();
  }
  private navToHome(): void {
    this.routeAnimationServ.changeState();
    this.router.navigateByUrl('/portfolio');
  }
  private navToResume(): void {
    this.routeAnimationServ.changeState();
    this.router.navigateByUrl('/portfolio/resume');
  }
}
