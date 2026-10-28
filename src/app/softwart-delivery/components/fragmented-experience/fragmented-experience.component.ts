import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-fragmented-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fragmented-experience.html',
})
export class FragmentedExperienceComponent {
  private sanitizer = inject(DomSanitizer);
  questions = signal([
    'كيف أضع Date واقعيًا مع Scope متغيّر؟',
    'كيف أدير Dependencies بين أكثر من Team؟',
    'كيف أربط الـBusiness بالـEngineering؟',
    'كيف أعرف أنّ الـDelivery صحيحةٌ فعلًا؟',
    'ومتى أستخدم Scrum أو Kanban أو Hybrid؟',
  ]);

  audiences = signal([
    {
      title: 'Project Manager أو Scrum Master',
      desc: 'وتشعر أنّ مسؤوليتك أصبحت أكبر من الـFramework التي تعمل بها.',
      color: 'bg-violet-100',
      iconColor: 'text-purple-800',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M28.3337 17.0001C28.3337 23.2593 23.2596 28.3334 17.0003 28.3334C10.7411 28.3334 5.66699 23.2593 5.66699 17.0001C5.66699 10.7409 10.7411 5.66675 17.0003 5.66675C23.2596 5.66675 28.3337 10.7409 28.3337 17.0001Z" stroke-width="2.40833" stroke="#7B4FB5"/>
      <path d="M22.6663 16.9999C22.6663 20.1295 20.1293 22.6666 16.9997 22.6666C13.8701 22.6666 11.333 20.1295 11.333 16.9999C11.333 13.8703 13.8701 11.3333 16.9997 11.3333C20.1293 11.3333 22.6663 13.8703 22.6663 16.9999Z" stroke-width="2.40833" stroke="#7B4FB5"/>
      <path d="M16.9997 18.4166C17.7821 18.4166 18.4163 17.7823 18.4163 16.9999C18.4163 16.2175 17.7821 15.5833 16.9997 15.5833C16.2173 15.5833 15.583 16.2175 15.583 16.9999C15.583 17.7823 16.2173 18.4166 16.9997 18.4166Z" fill="#7B4FB5" stroke-width="2.40833" stroke="#7B4FB5"/>
      <path d="M20.542 13.4584L27.6253 6.37508M24.0837 5.66675H28.3337V9.91675" stroke-width="2.40833" stroke="#7B4FB5"/>
    `),
    },
    {
      title: 'Tech Lead أو Engineering Manager',
      desc: 'وأصبحت مسؤولًا الآن عن: People + Stakeholders + Commitments + Delivery.',
      color: 'bg-sky-100',
      iconColor: 'text-sky-700',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M17 11.3333C17 13.6805 15.0972 15.5833 12.75 15.5833C10.4028 15.5833 8.5 13.6805 8.5 11.3333C8.5 8.98604 10.4028 7.08325 12.75 7.08325C15.0972 7.08325 17 8.98604 17 11.3333Z" stroke-width="2.40833" stroke="#2F7AAE"/>
      <path d="M27.6253 12.7499C27.6253 14.7059 26.0397 16.2916 24.0837 16.2916C22.1277 16.2916 20.542 14.7059 20.542 12.7499C20.542 10.7939 22.1277 9.20825 24.0837 9.20825C26.0397 9.20825 27.6253 10.7939 27.6253 12.7499Z" stroke-width="2.40833" stroke="#2F7AAE"/>
      <path d="M4.25 28.3333V26.9166C4.25 25.038 4.99628 23.2363 6.32466 21.9079C7.65304 20.5795 9.45472 19.8333 11.3333 19.8333C13.212 19.8333 15.0136 20.5795 16.342 21.9079C17.6704 23.2363 18.4167 25.038 18.4167 26.9166V28.3333M19.8333 28.3333V26.9166C19.8464 25.7711 20.2063 24.6564 20.8656 23.7196C21.5249 22.7828 22.4527 22.0678 23.5266 21.6689C24.6005 21.27 25.77 21.206 26.8811 21.4853C27.9921 21.7645 28.9924 22.374 29.75 23.2333" stroke-width="2.40833" stroke="#2F7AAE"/>
    `),
    },
    {
      title: 'BA أو Product Owner أو Product Manager',
      desc: 'وتعرف تخصّصك جيدًا، لكنّك تريد فهم الرحلة الكاملة.',
      color: 'bg-sage-100',
      iconColor: 'text-stone-600',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M5.66699 25.5001H14.167L17.0003 14.1667L19.8337 25.5001H28.3337" stroke-width="2.40833" stroke="#5C7F45"/>
      <path d="M19.833 7.08325H28.333V15.5833" stroke-width="2.40833" stroke="#5C7F45"/>
      <path d="M28.333 7.08325L19.833 15.5833" stroke-width="2.40833" stroke="#5C7F45"/>
    `),
    },
  ]);
}
