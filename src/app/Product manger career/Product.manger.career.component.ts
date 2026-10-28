import { Component } from '@angular/core';
import { ProductHeaderComponent } from '../Product manger career/components/header/product.header.component';
import { TypesOfProductsComponent } from './components/types.of.products/types.of.products.component';
import { ProblemComponent } from './components/problem/problem.component';
import { ProgramComponent } from './components/Program/Program.component';
import { WhyProgramComponent } from './components/why program/why.program.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { TargetAudienceComponent } from './components/Target audience/Target audience.component';
import { NotSuitableComponent } from './components/not suitable/notsuitable.component';
import { LecturerComponent } from './components/Lecturer/lecturer.component';
import { FeedbackComponent } from './components/Feedback/feedback.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { OfferComponent } from './components/offer/offer.component';
import { Guaranteecomponent } from './components/Guarantee/Guarantee.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { DecisionComponent } from './components/decision/decision.component';
import { LogoMarqueeComponent } from '../shared/components/logo-marquee/logo-marquee.component';
import { FloatingCtaComponent } from '../shared/components/floating-cta/floating-cta.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductHeaderComponent,
    FloatingCtaComponent,
    TypesOfProductsComponent,
    ProblemComponent,
    LogoMarqueeComponent,
    ProgramComponent,
    WhyProgramComponent,
    CurriculumComponent,
    TargetAudienceComponent,
    NotSuitableComponent,
    LecturerComponent,
    FeedbackComponent,
    GiftsComponent,
    OfferComponent,
    Guaranteecomponent,
    CertificateComponent,
    QuestionsComponent,
    DecisionComponent,
  ],
  templateUrl: './Product.manger.career.html',
})
export class ProductmangerComponent {}
