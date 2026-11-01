import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-research-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research-cta.html',
})
export class ResearchCtaComponent {
  sent = signal(false);
  private sanitizer = inject(DomSanitizer);

  options = [
    {
      title: 'شارك بسؤالٍ بحثي',
      body: 'سؤالٌ يتكرّر في عملك ولم تجد له إجابةً مبنية على بيانات؟',
      cta: 'أرسل سؤالك ←',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.333 10.6069C21.3255 12.2061 20.9703 13.7765 20.3012 15.1695C19.6321 16.5624 18.6712 17.7317 17.5095 18.5666C16.3478 19.4014 15.0238 19.8742 13.6629 19.9402C12.302 20.0061 10.9493 19.6629 9.73301 18.9433L4.33301 20L5.33301 14.5989C4.88214 12.1077 5.29259 9.50826 6.47407 7.37237C7.65555 5.23649 9.51128 3.73916 11.633 3.20977C13.7547 2.68039 15.9687 3.16232 17.7878 4.54955C19.6069 5.93677 20.8821 8.11565 21.333 10.6069Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
  <path d="M10.333 10.4913C10.3346 10.0409 10.4578 9.59937 10.6896 9.21325C10.9214 8.82713 11.2532 8.51079 11.6499 8.29767C12.0466 8.08454 12.4936 7.98254 12.9435 8.00244C13.3934 8.02235 13.8296 8.16341 14.2059 8.41074C14.5823 8.65806 14.8849 9.00246 15.0817 9.40754C15.2785 9.81262 15.3622 10.2633 15.324 10.7121C15.2858 11.1608 15.1271 11.5909 14.8646 11.9569C14.6022 12.3228 14.2458 12.6111 13.833 12.7913C13.233 13.0913 12.833 13.5913 12.833 14.2913M12.833 17.4913H12.843" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>`),
    },
    {
      title: 'انضم إلى شبكة الباحثين',
      body: 'للممارسين والأكاديميين الراغبين في المساهمة في أبحاث الـHub.',
      cta: 'قدّم طلبك ←',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13 8C13 10.2091 11.2091 12 9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
  <path d="M2 21C2 17 5 15 9 15C13 15 16 17 16 21M19 8V11M19 11V14M19 11H16M19 11H22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>`),
    },
    {
      title: 'بحثٌ مشترك لمؤسستك',
      body: 'دراسةٌ مخصّصة على فرقك أو قطاعك، بمنهجية فريق البحث في DPC.',
      cta: 'تواصل معنا ←',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
  <path d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M3 13H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>`),
    },
  ].reverse();

  onSubmit(event: Event) {
    event.preventDefault();
    this.sent.set(true);
  }
}