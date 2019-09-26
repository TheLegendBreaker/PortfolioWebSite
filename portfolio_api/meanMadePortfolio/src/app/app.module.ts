import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ProjectResolver } from './resolvers/project.resolver';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material';
import * as fromLandingPage from './LandingPage';
import * as fromShowResume from './show-resume';
import * as fromSendResume from './sendResume';
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
    ...fromSendResume.components,
  ],
  imports: [
    FormsModule,
    BrowserModule,
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
