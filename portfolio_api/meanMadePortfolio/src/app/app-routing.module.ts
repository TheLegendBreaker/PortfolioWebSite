import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';
import { ShowProjectComponent } from './showPage';
import { ShowResumeComponent } from './show-resume';
import { ContactComponent } from './contact-page';
import { ProjectResolver } from './resolvers/project.resolver';

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
        pathMatch: 'full',
      },
      {
        path: 'project/:id',
        component: ShowProjectComponent,
        pathMatch: 'full',
        resolve: {
          projects: ProjectResolver,
        },
      },
      {
        path: 'resume',
        component: ShowResumeComponent,
        pathMatch: 'full',
      },
      {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
