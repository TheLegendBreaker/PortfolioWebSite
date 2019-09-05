import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';
import { ShowProjectComponent } from './showPage';
import { ShowResumeComponent } from './show-resume';
import { ContactComponent } from './contact-page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'project/:id',
        component: ShowProjectComponent,
      },
      {
        path: 'resume',
        component: ShowResumeComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
