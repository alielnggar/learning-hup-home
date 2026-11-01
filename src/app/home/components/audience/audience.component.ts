import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-audience',
  standalone: true,
  templateUrl: './audience.component.html',
})
export class AudienceComponent {
  private sanitizer = inject(DomSanitizer);

  audiences: {
    en: string;
    title: string;
    body: string;
    iconSvg: SafeHtml;
    bg: string;
    accent: string;
  }[] = [
    {
      en: 'INDIVIDUALS',
      title: 'الأفراد',
      body: 'لمن يريد أن يفهم مجال المنتجات، ويطبّق أدواته، ويبني مسار تعلّم متصلًا.',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
        <path d="M12 5V21"></path>
        <path d="M20.001 19C20.5313 18.9997 21.0397 18.7889 21.4146 18.4139C21.7894 18.0388 22 17.5303 22 17V5C22 4.46974 21.7894 3.96118 21.4146 3.58614C21.0397 3.2111 20.5313 3.00027 20.001 3L16 3.002C15.2239 3.00177 14.4585 3.18218 13.7642 3.52897C13.07 3.87575 12.4659 4.37939 12 5C11.5343 4.37902 10.9303 3.875 10.2361 3.52786C9.54179 3.18073 8.77623 3 8 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V17C2 17.5303 2.21058 18.0388 2.58543 18.4139C2.96029 18.7889 3.46874 18.9997 3.999 19H8C8.77623 19 9.54179 19.1807 10.2361 19.5279C10.9303 19.875 11.5343 20.379 12 21C12.4657 20.379 13.0697 19.875 13.7639 19.5279C14.4582 19.1807 15.2238 19 16 19H20.001Z"></path>
      `),
      bg: 'linear-gradient(158.9deg, #bfe1f6 0%, #dff0fa 68%, #fff 100%)',
      accent: 'hover:border-sky focus-visible:border-sky',
    },
    {
      en: 'COMPANY TEAMS',
      title: 'فرق الشركات',
      body: 'للفرق التي تحتاج معرفة مشتركة، وممارسة منظّمة، ورؤية أوضح للتطوّر.',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
        <path d="M10 12H14"></path>
        <path d="M10 8H14"></path>
        <path d="M14 21V18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18V21"></path>
        <path d="M6 10H4C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H18"></path>
        <path d="M6 21V5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5V21"></path>
      `),
      bg: 'linear-gradient(158.9deg, #cbc7ef 0%, #e4e2f6 68%, #fff 100%)',
      accent: 'hover:border-purple focus-visible:border-purple',
    },
    {
      en: 'RESEARCHERS & PARTNERS',
      title: 'باحثون وشركاء',
      body: 'للباحثين والممارسين والجهات الراغبة في المساهمة في معرفة تطبيقية.',
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(`
        <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"></path>
        <path d="M16 3.128C16.8578 3.35037 17.6174 3.85126 18.1597 4.55206C18.702 5.25286 18.9962 6.11389 18.9962 7C18.9962 7.88611 18.702 8.74714 18.1597 9.44794C17.6174 10.1487 16.8578 10.6496 16 10.872"></path>
        <path d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13"></path>
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"></path>
      `),
      bg: 'linear-gradient(158.9deg, #cfddc3 0%, #e6eedf 68%, #fff 100%)',
      accent: 'hover:border-sage focus-visible:border-sage',
    },
  ];
}
