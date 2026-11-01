// research-areas.component.ts
import {
  Component,
  EventEmitter,
  Output,
  signal,
  ViewChild,
  ElementRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-research-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research-areas.html',
})
export class ResearchAreasComponent {
  @Output() domainSelected = new EventEmitter<string>();
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  private sanitizer = inject(DomSanitizer);

  areas = signal([
    {
      n: '01',
      title: 'إدارة المنتجات',
      body: 'من الاستراتيجية والاكتشاف إلى قياس أثر المنتج بعد الإطلاق.',
      count: '4 إصدارات',
      tint: 'bg-violet-100 text-purple-600 group-hover:bg-white/20 group-hover:text-white',

      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`),
    },
    {
      n: '02',
      title: 'التحوّل الرقمي',
      body: 'قياس القيمة، والحوكمة، وأسباب تعثّر المبادرات داخل المؤسسات.',
      count: '6 إصدارات',
      tint: 'bg-violet-100 text-purple-600 group-hover:bg-white/20 group-hover:text-white',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4 5V19H20M8 15L11 11L14 13L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#C9B5F5"/>
</svg>`),
    },
    {
      n: '03',
      title: 'تحليل الأعمال',
      body: 'جودة المتطلبات، وتكلفة إعادة العمل، وأثرهما على القرار.',
      count: '3 إصدارات',
      tint: 'bg-violet-100 text-purple-600 group-hover:bg-white/20 group-hover:text-white',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4 5V19H20M8 15L11 11L14 13L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#3F86B5"/>
</svg>`),
    },
    {
      n: '04',
      title: 'Delivery & Agile',
      body: 'نماذج التشغيل، وتدفّق العمل، وسرعة التسليم في الفرق.',
      count: '3 إصدارات',
      tint: 'bg-violet-100 text-purple-600 group-hover:bg-white/20 group-hover:text-white',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.9999 12.0001C20.0101 13.815 19.4029 15.5794 18.278 17.0037C17.1531 18.4279 15.5773 19.4274 13.8094 19.8379C12.0415 20.2484 10.1866 20.0455 8.54918 19.2626C6.91178 18.4798 5.58925 17.1634 4.79873 15.5297C4.00822 13.8959 3.79672 12.042 4.19895 10.2722C4.60119 8.50237 5.59325 6.92194 7.01225 5.79039C8.43124 4.65883 10.1928 4.04341 12.0078 4.04517C13.8227 4.04693 15.5831 4.66576 16.9999 5.80007" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#56743F"/>
  <path d="M20 4V9H15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#56743F"/>
</svg>`),
    },
    {
      n: '05',
      title: 'تجربة العملاء',
      body: 'سلوك المستخدمين، وقابلية الاستخدام، ورضا العملاء.',
      count: '2 إصدار',
      tint: 'bg-violet-100 text-purple-600 group-hover:bg-white/20 group-hover:text-white',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#9A5FD6"/>
  <path d="M4 21C4 17 8 15 12 15C16 15 20 17 20 21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#9A5FD6"/>
</svg>`),
    },
  ]);

  scrollList(direction: number) {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({ left: direction * 278, behavior: 'smooth' });
    }
  }
}
