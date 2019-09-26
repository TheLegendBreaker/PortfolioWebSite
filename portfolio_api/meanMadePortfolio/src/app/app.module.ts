import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
} from '@angular/material';

import { ProjectResolver } from './resolvers/project.resolver';
import { AppRoutingModule } from './app-routing.module';
import * as fromLandingPage from './LandingPage';
import * as fromShowResume from './show-resume';
import * as fromSendResume from './sendResume';
import { AppComponent } from './app.component';
import * as fromContact from './contact-page';
import * as fromShowPage from './showPage';
import * as fromNav from './nav';

@NgModule({
  declarations: [
    AppComponent,
    ...fromLandingPage.components,
    ...fromShowPage.components,
    ...fromShowResume.components,
    ...fromContact.components,
    ...fromSendResume.components,
    ...fromNav.components,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ProjectResolver],
  bootstrap: [AppComponent],
  entryComponents: [fromSendResume.SendResumeDialogComponent],
})
export class AppModule {}
