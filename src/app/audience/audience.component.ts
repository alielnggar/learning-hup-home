import { Component } from '@angular/core';

@Component({
  selector: 'app-audience',
  standalone: true,
  templateUrl: './audience.component.html'
})
export class AudienceComponent {
  audiences = [
    { en: "INDIVIDUALS", title: "الأفراد", body: "لمن يريد أن يفهم مجال المنتجات، ويطبّق أدواته، ويبني مسار تعلّم متصلًا.", iconPath: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z", bg: "linear-gradient(158.9deg, #bfe1f6 0%, #dff0fa 68%, #fff 100%)", accent: "hover:border-sky focus-visible:border-sky" },
    { en: "COMPANY TEAMS", title: "فرق الشركات", body: "للفرق التي تحتاج معرفة مشتركة، وممارسة منظّمة، ورؤية أوضح للتطوّر.", iconPath: "M3 21h18M5 21V7l8-4 8 4v14M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4", bg: "linear-gradient(158.9deg, #cbc7ef 0%, #e4e2f6 68%, #fff 100%)", accent: "hover:border-purple focus-visible:border-purple" },
    { en: "RESEARCHERS & PARTNERS", title: "باحثون وشركاء", body: "للباحثين والممارسين والجهات الراغبة في المساهمة في معرفة تطبيقية.", iconPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m12-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75", bg: "linear-gradient(158.9deg, #cfddc3 0%, #e6eedf 68%, #fff 100%)", accent: "hover:border-sage focus-visible:border-sage" },
  ];
}