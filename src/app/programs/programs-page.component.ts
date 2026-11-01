import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsHeroComponent } from './components/programs-hero/programs-hero.component';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { FeedbackComponent } from './components/Feedback/feedback.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { Guaranteecomponent } from './components/Guarantee/Guarantee.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { questionsComponent } from './components/questions/questions.component';


@Component({
  selector: 'app-programs-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    questionsComponent,
    FooterComponent,
    InstructorsComponent,
    FeedbackComponent,
    ProgramsHeroComponent,
    ProgramsListComponent,
    FeedbackComponent,
    CertificateComponent,
    Guaranteecomponent
],
  templateUrl: './programs-page.html',
})
export class ProgramsPageComponent {
  currentSearchParams = signal<{ query: string; level: string } | null>(null);

  handleSearch(params: { query: string; level: string }) {
    this.currentSearchParams.set(params);
    document.getElementById('all-programs')?.scrollIntoView({ behavior: 'smooth' });
  }
}