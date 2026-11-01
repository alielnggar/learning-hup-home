import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-process-band',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-band.html',
})
export class ProcessBandComponent {
  private sanitizer = inject(DomSanitizer);

  outputs = ['ورقة بحثية', 'Framework', 'أداة أو Kit', 'وحدة في برنامج', 'مقال في المجلة'];
  steps = [
    {
      n: '03',
      title: 'التحليل والمراجعة',
      body: 'تحليلٌ يراجعه ممارسون وخبراء قبل أن يُنشر.',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(` <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M3.66699 4.5835V17.4168H18.3337M7.33366 13.7502L10.0837 10.0835L12.8337 11.9168L17.417 6.41683" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" stroke="#746DC6"/>
</svg>`),
    },

    {
      n: '02',
      title: 'جمع البيانات',
      body: 'مقابلات، ومسوح، وبيانات من مشاريع فعلية بعد إذن أصحابها.',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M17.4163 5.5C17.4163 7.01878 14.5435 8.25 10.9997 8.25C7.45585 8.25 4.58301 7.01878 4.58301 5.5C4.58301 3.98122 7.45585 2.75 10.9997 2.75C14.5435 2.75 17.4163 3.98122 17.4163 5.5Z" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" stroke="#746DC6"/>
  <path d="M4.58301 5.5V11M4.58301 11C4.58301 12.5583 7.33301 13.75 10.9997 13.75C14.6663 13.75 17.4163 12.5583 17.4163 11M4.58301 11V16.5C4.58301 18.0583 7.33301 19.25 10.9997 19.25C14.6663 19.25 17.4163 18.0583 17.4163 16.5V11M17.4163 11V5.5" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" stroke="#746DC6"/>
</svg>`),
    },
    {
      n: '01',
      title: 'سؤالٌ من الميدان',
      body: 'نلتقط الأسئلة المتكرّرة من مشاريع DPC ومن مجتمع الممارسين.',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11Z" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" stroke="#746DC6"/>
  <path d="M8.70801 8.70848C8.70945 8.29566 8.82237 7.89089 9.03486 7.53695C9.24734 7.183 9.55148 6.89303 9.91515 6.69766C10.2788 6.5023 10.6885 6.4088 11.1009 6.42704C11.5134 6.44529 11.9132 6.5746 12.2582 6.80131C12.6032 7.02803 12.8805 7.34372 13.0609 7.71505C13.2413 8.08637 13.3181 8.49953 13.2831 8.91087C13.248 9.3222 13.1026 9.71644 12.862 10.0519C12.6214 10.3874 12.2947 10.6517 11.9163 10.8168C11.3663 11.0918 10.9997 11.5501 10.9997 12.1918M10.9997 15.1251H11.0088" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" stroke="#746DC6"/>
</svg>`),
    },
  ].reverse();
}
