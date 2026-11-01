import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchPageComponent } from './ResearchPage/researchpage.component';
import { ProgramsPageComponent } from './programs/programs-page.component';

export const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'ResearchPageComponent',
    component: ResearchPageComponent,
    title: 'Research',
  },
  { path: 'programs', component: ProgramsPageComponent, title: 'Programs' },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'Home',
  },
];
