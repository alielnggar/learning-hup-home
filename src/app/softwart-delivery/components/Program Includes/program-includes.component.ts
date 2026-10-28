import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-program-includes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './program-includes.html',
})
export class ProgramIncludesComponent {
  private sanitizer = inject(DomSanitizer);
  includes = signal([
    {
      title: '15 ساعة من المحاضرات',
      desc: 'مسجّلة، وتشاهدها بإيقاعك',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M5 5H19C20.1046 5 21 5.89543 21 7V15C21 16.1046 20.1046 17 19 17H5C3.89543 17 3 16.1046 3 15V7C3 5.89543 3.89543 5 5 5Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
      <path d="M10 9L14 11L10 13V9Z" fill="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
      <path d="M8 21H16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
    `),
    },
    {
      title: 'قوالب وملفات للتحميل',
      desc: 'تستخدمها مع فريقك مباشرةً',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M12 3V15M16 11L12 15L8 11" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
      <path d="M4 17V20H20V17" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
    `),
    },
    {
      title: 'هدايا وملفات إضافية',
      desc: 'ملفات وقوالب إضافية مجانا',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M5 5H19C20.1046 5 21 5.89543 21 7V15C21 16.1046 20.1046 17 19 17H5C3.89543 17 3 16.1046 3 15V7C3 5.89543 3.89543 5 5 5Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
      <path d="M10 9L14 11L10 13V9Z" fill="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
      <path d="M8 21H16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
    `),
    },
    {
      title: 'Assignments على مشروعك',
      desc: 'بعد كلّ وحدة من الوحدات الخمس',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M4 20H8L19 9L15 5L4 16V20Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
    `),
    },
    {
      title: 'اختبارات قصيرة',
      desc: 'تتأكّد بها من فهمك',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M9 11L11 13L15 9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
      <path d="M8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8C4 5.79086 5.79086 4 8 4Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
    `),
    },
    {
      title: 'شهادة إتمام',
      desc: 'شهادة إتمام معتمدة',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
      <path d="M9 13.5L8 21L12 19L16 21L15 13.5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
    `),
    },
  ]);
}
