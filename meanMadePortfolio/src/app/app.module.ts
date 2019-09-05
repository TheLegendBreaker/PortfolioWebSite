import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import * as fromLandingPage from './LandingPage';
import * as fromShowResume from './show-resume';
import { AppComponent } from './app.component';
import * as fromContact from './contact-page';
import * as fromShowPage from './showPage';

@NgModule({
  declarations: [
    AppComponent,
    ...fromLandingPage.components,
    ...fromShowPage.components,
    ...fromShowResume.components,
    ...fromContact.components,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
