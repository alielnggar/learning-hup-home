import { Component } from '@angular/core';
import { HeroComponent } from '../../app/hero/hero.component';
import { StatsComponent } from '../../app/stats/stats.component';
import { LogoMarqueeComponent } from '../../app/logo-marquee/logo-marquee.component';
import { AudienceComponent } from '../../app/audience/audience.component';
import { HomeProgramsComponent } from '../../app/home/home-programs/home-programs.component';
import { ExploreComponent } from '../../app/explore/explore.component';
import { IndicatorsComponent } from '../../app/indicators/indicators.component';
import { KitsComponent } from '../../app/kits/kits.component';
import { PublicationsComponent } from '../../app/publications/publications.component';
import { BooksComponent } from '../../app/books/books.component';
import { ExpertsComponent } from '../../app/experts/experts.component';
import { JoinCtaComponent } from '../../app/join-cta/join-cta.component';
import { NewsletterComponent } from '../../app/newsletter/newsletter.component';
import { FloatingCtaComponent } from '../../app/floating-cta/floating-cta.component';
import { FooterComponent } from '../footer/footer.component';

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