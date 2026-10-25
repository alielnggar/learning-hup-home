import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../shared/ui/logo.component';


type FooterLink = { label: string; href: string; external?: boolean };
type FooterColumn = { title: string; links: FooterLink[] };

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, LogoComponent],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  columns: FooterColumn[] = [
    {
      title: "الـHub",
      links: [
        { label: "البرامج", href: "/programs" },
        { label: "الفعاليات", href: "/events" },
        { label: "الأدوات", href: "/tools" },
        { label: "المؤشرات", href: "/indicators" },
        { label: "الخبراء", href: "/experts" },
      ],
    },
    {
      title: "المعرفة",
      links: [
        { label: "البحث والابتكار", href: "/research" },
        { label: "الأبحاث والتقارير", href: "/reports" },
        { label: "الكتب", href: "/books" },
        { label: "المجلة", href: "/journal" },
        { label: "المقالات", href: "/articles" },
      ],
    },
    {
      title: "عن الـHub",
      links: [
        { label: "للشركات", href: "/corporate" },
        { label: "تحقق من شهادة", href: "/verify" },
        { label: "تواصل معنا", href: "/contact" },
        { label: "الأسئلة الشائعة", href: "/faq" },
      ],
    },
    {
      title: "انضم لنا",
      links: [
        { label: "انضم كخبير", href: "/join-expert" },
        { label: "انضم كباحث", href: "/join-researcher" },
        { label: "انشر معنا", href: "/publish" },
        { label: "شبكة الباحثين", href: "/research-network" },
      ],
    },
    {
      title: "منظومة DPC",
      links: [
        { label: "DPC Consulting", href: "#", external: true },
        { label: "DPC Community", href: "https://digital-products.online/", external: true },
      ],
    },
  ];

  legal = ["الشروط", "الخصوصية", "سياسة الاسترداد"];
}