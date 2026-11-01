import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { LogoMarqueeComponent } from './components/logo-marquee/logo-marquee.component';
import { AudienceComponent } from './components/audience/audience.component';
import { HomeProgramsComponent } from './components/home-programs/home-programs.component';
import { ExploreComponent } from './components/explore/explore.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { KitsComponent } from './components/kits/kits.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { BooksComponent } from './components/books/books.component';
import { ExpertsComponent } from './components/experts/experts.component';
import { JoinCtaComponent } from './components/join-cta/join-cta.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FloatingCtaComponent } from './components/floating-cta/floating-cta.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    StatsComponent,
    LogoMarqueeComponent,
    AudienceComponent,
    HomeProgramsComponent,
    ExploreComponent,
    IndicatorsComponent,
    KitsComponent,
    PublicationsComponent,
    BooksComponent,
    ExpertsComponent,
    JoinCtaComponent,
    NewsletterComponent,
    FloatingCtaComponent,
    FooterComponent
],
  templateUrl: './home.component.html'
})
export class HomeComponent {}