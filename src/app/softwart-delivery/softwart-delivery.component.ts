import { Component } from '@angular/core';
import { LogoMarqueeComponent } from '../shared/components/logo-marquee/logo-marquee.component';
import { HomeProgramsComponent } from '../shared/components/home-programs/home-programs.component';
import { ProductHeaderComponent } from '../Product manger career/components/header/product.header.component';
import { TypesOfProductsComponent } from '../Product manger career/components/types.of.products/types.of.products.component';
import { ProblemComponent } from '../Product manger career/components/problem/problem.component';
import { ProgramComponent } from '../Product manger career/./components/Program/Program.component';
import { WhyProgramComponent } from '../Product manger career/./components/why program/why.program.component';
import { CurriculumComponent } from '../Product manger career/./components/curriculum/curriculum.component';
import { TargetAudienceComponent } from '../Product manger career/./components/Target audience/Target audience.component';
import { NotSuitableComponent } from '../Product manger career/./components/not suitable/notsuitable.component';
import { LecturerComponent } from '../Product manger career/./components/Lecturer/lecturer.component';
import { FeedbackComponent } from '../Product manger career/./components/Feedback/feedback.component';
import { GiftsComponent } from '../Product manger career/./components/gifts/gifts.component';
import { OfferComponent } from '../Product manger career/./components/offer/offer.component';
import { Guaranteecomponent } from '../Product manger career/./components/Guarantee/Guarantee.component';
import { CertificateComponent } from '../Product manger career/components/certificate/certificate.component';
import { QuestionsComponent } from '../Product manger career/./components/questions/questions.component';
import { DecisionComponent } from '../Product manger career/./components/decision/decision.component';
import { FragmentedExperienceComponent } from './components/fragmented-experience/fragmented-experience.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { ControlLoopComponent } from './components/Delivery Control Loop/control-loop.component';
import { CurriculumDetailComponent } from './components/Curriculum Detail/curriculum-detail.component';
import { InstructorsComponent } from './components/Instructors/Instructors.component';
import { ProgramIncludesComponent } from './components/Program Includes/program-includes.component';
import { PreStartQuestionsComponent } from './components/Pre-Start Questions/pre-start-questions.component';
import { FinalDecisionComponent } from './components/Final Decision/final-decision.component';
import { SoftwareHeroComponent } from './components/header/software.delivery.header.component';
import { ProblemHighlightComponent } from './components/problem-highlight/problem-highlight.component';
import { HeaderComponent } from '../shared/components/header/header.share.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { FloatingCtaComponent } from '../shared/components/floating-cta/floating-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LogoMarqueeComponent,
    HomeProgramsComponent,
    ProductHeaderComponent,
    FloatingCtaComponent,
    HeaderComponent,
    FooterComponent,
    TypesOfProductsComponent,
    ProblemComponent,
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
    FragmentedExperienceComponent,
    MethodologyComponent,
    ControlLoopComponent,
    CurriculumDetailComponent,
    InstructorsComponent,
    ProgramIncludesComponent,
    PreStartQuestionsComponent,
    FinalDecisionComponent,
    SoftwareHeroComponent,
    ProblemHighlightComponent,
  ],
  templateUrl: './softwart-delivery.html',
})
export class SoftwartDeliveryComponent {}
