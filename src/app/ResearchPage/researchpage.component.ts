// research-page.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchHeroComponent } from '../ResearchPage/components/research-hero/research-hero.component';
import { ResearchFeaturedComponent } from '../ResearchPage/components/research-featured/research-featured.component';
import { ResearchAreasComponent } from '../ResearchPage/components/researchareas/research-areas.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ProcessBandComponent } from './components/processband/process-band.component';
import { LabComponent } from './components/Lab/lab.component';
import { TeamComponent } from './components/Team/team.component';
import { ResearchCtaComponent } from './components/research-CTA/research-cta.component';
import { FooterComponent } from '../home/footer/footer.component';


@Component({
  selector: 'app-research-page',
  standalone: true,
  imports: [
    CommonModule,
    ResearchHeroComponent,
    ResearchFeaturedComponent,
    ResearchAreasComponent,
    ArchiveComponent,
    ProcessBandComponent,
    LabComponent,
    TeamComponent,
    ResearchCtaComponent,
    FooterComponent
],
    templateUrl: './researchpage.html', 
})
export class ResearchPageComponent {
  // Global Page State using Signals
  activeSearchQuery = signal('');
  activeDomainFilter = signal('الكلّ');
  isPaywallOpen = signal(false);
  paywallContext = signal<{kind: string, title: string} | null>(null);

  handleSearch(query: string) {
    this.activeSearchQuery.set(query);
    this.scrollToArchive();
  }

  handleDomainSelect(domain: string) {
    this.activeDomainFilter.set(domain);
    this.scrollToArchive();
  }

  handleOpenPaywall(context: {kind: string, title: string}) {
    this.paywallContext.set(context);
    this.isPaywallOpen.set(true);
  }

  private scrollToArchive() {
    // Logic to scroll to the Archive Section smoothly
    const archiveEl = document.getElementById('archive');
    if (archiveEl) {
      archiveEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
}