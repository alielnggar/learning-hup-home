import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { inject } from '@angular/core';

@Component({
  selector: 'app-target-audience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Targetaudience.html',
})
export class TargetAudienceComponent {
  private readonly sanitizer = inject(DomSanitizer);

  // بيانات الفئات المستهدفة
  audiences = signal([
    {
      title: 'محلل أعمال',
      desc: 'وتشعر أنّك لا تريد أن تبقى محصورًا في جمع المتطلبات وكتابة الـDocumentation فقط. تريد أن تفهم الصورة الأكبر: لماذا نختار هذه المشكلة؟ كيف نربطها بأهداف البزنس؟ كيف نتعامل مع Stakeholders؟ وكيف تنتقل من Requirements إلى Product Decisions حقيقية؟',
      iconBg: 'bg-violet-50',
      iconColor: 'text-purple-600',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M2.75 2.75V19.25H19.25"
        stroke-width="1.83333" stroke-linecap="round"
        stroke-linejoin="round" stroke="#746DC6"/>
      <path d="M6.41699 12.8332L10.0837 9.1665L12.8337 11.9165L17.417 6.4165"
        stroke-width="1.83333" stroke-linecap="round"
        stroke-linejoin="round" stroke="#746DC6"/>
    `),
    },
    {
      title: 'صاحب منتج',
      desc: 'وتتعامل يوميًا مع Backlog وStakeholders وأولوياتٍ متغيّرة وطلبات Features كثيرة. لكنّك تريد أن تفهم Product Management بشكلٍ أعمق، بدلًا من أن يكون دورك ترتيب الـTickets أو متابعة التنفيذ فقط. البرنامج يساعدك على ربط الـDiscovery والـPrioritization والـDelivery والـMetrics في رحلةٍ واحدة واضحة.',
      iconBg: 'bg-violet-50',
      iconColor: 'text-violet',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M4.58333 3.6665H17.4167C18.4292 3.6665 19.25 4.48732 19.25 5.49984V16.4998C19.25 17.5124 18.4292 18.3332 17.4167 18.3332H4.58333C3.57081 18.3332 2.75 17.5124 2.75 16.4998V5.49984C2.75 4.48732 3.57081 3.6665 4.58333 3.6665Z"
        stroke-width="1.83333" stroke-linecap="round"
        stroke-linejoin="round" stroke="#AD7BE9"/>
      <path d="M7.33301 8.25H14.6663M7.33301 11.9167H11.9163"
        stroke-width="1.83333" stroke-linecap="round"
        stroke-linejoin="round" stroke="#AD7BE9"/>
    `),
    },
    {
      title: 'مدير منتج',
      desc: 'وتعمل بالفعل في المجال، لكنّك تشعر أنّ خبرتك مبنيّة على الاجتهاد أكثر من Framework واضح. تحضر Meetings كثيرة، وتسمع آراءً كثيرة، وتتعامل مع Sales وSupport وCustomers وManagement وTech Teams — لكنّك ما زلت تسأل: «هل نحلّ المشكلة الصحيحة؟ أم نبني ما طُلب منّا فقط؟»',
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-ink',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11Z" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" stroke="#82C3EC"/>
  <path d="M13.75 11C13.75 12.5188 12.5188 13.75 11 13.75C9.48122 13.75 8.25 12.5188 8.25 11C8.25 9.48122 9.48122 8.25 11 8.25C12.5188 8.25 13.75 9.48122 13.75 11Z" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" stroke="#82C3EC"/>
</svg>
    `),
    },
    {
      title: 'مدير مشاريع أو مدير التسليم',
      desc: 'وتريد الانتقال من عقلية «تسليم المشروع» إلى عقلية «قيادة المنتج». إذا كنت تفهم الـScope والـTimeline والـRisks والـDelivery، لكنّك تريد أن تفهم المستخدم والقيمة والـStrategy والـProduct Outcomes — فهذا البرنامج مناسبٌ لك.',
      iconBg: 'bg-violet-50',
      iconColor: 'text-purple-600',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M8.25 10.0832L11 12.8332L20.1667 3.6665"
        stroke-width="1.83333" stroke-linecap="round"
        stroke-linejoin="round" stroke="#746DC6"/>
      <path d="M19.25 11V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V4.58333C2.75 4.0971 2.94315 3.63079 3.28697 3.28697C3.63079 2.94315 4.0971 2.75 4.58333 2.75H14.6667"
        stroke-width="1.83333" stroke-linecap="round"
        stroke-linejoin="round" stroke="#746DC6"/>
    `),
    },
    {
      title: 'مبرمج أو مصمم',
      desc: 'وتريد أن تفهم لماذا تُبنى بعض الـFeatures ثم تفشل، رغم أنّ التنفيذ أو التصميم كان جيدًا. إذا أردت أن ترى ما يحدث قبل وصول الـFeature إلى الـSprint أو شاشة التصميم، وتفهم كيف يفكّر الـProduct Manager في المشكلة والأولوية والـMVP والـMetrics — فالبرنامج سيساعدك على رؤية المنتج من منظور 360 درجة.',
      iconBg: 'bg-violet-50',
      iconColor: 'text-violet',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M14.6663 16.5L20.1663 11L14.6663 5.5M7.33301 5.5L1.83301 11L7.33301 16.5"
        stroke-width="1.83333" stroke-linecap="round"
        stroke-linejoin="round" stroke="#AD7BE9"/>
    `),
    },
    {
      title: ' أو صاحب منتجٍ تقني Founder',
      desc: 'وتريد تقليل القرارات الخاطئة قبل بناء المنتج. إذا كنت تبني منصّة أو تطبيقًا أو SaaS أو Marketplace أو منتجًا رقميًا، فالبرنامج يساعدك على فهم رحلة المنتج من الفكرة إلى الإطلاق والنمو، بدلًا من البناء بناءً على افتراضاتٍ فقط.',
      iconBg: 'bg-sage-100',
      iconColor: 'text-sage-ink',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
      <path d="M10.9997 1.8335L13.7497 8.25016H20.1663L15.1247 12.3752L16.4997 19.2502L10.9997 15.5835L5.49967 19.2502L6.87467 12.3752L1.83301 8.25016H8.24967L10.9997 1.8335Z"
        stroke-width="1.83333" stroke-linecap="round"
        stroke-linejoin="round" stroke="#8AA873"/>
    `),
    },
  ]);
}
