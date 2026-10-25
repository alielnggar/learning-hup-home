import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../app/shared/ui/button/button.component';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './publications.component.html'
})
export class PublicationsComponent {
  tones: Record<string, { ground: string; ink: string; bars: string[] }> = {
    sage: { ground: "bg-sage-ground", ink: "text-sage-ink", bars: ["bg-sage", "bg-sage", "bg-purple", "bg-sage"] },
    sky: { ground: "bg-sky-100", ink: "text-sky-ink", bars: ["bg-sky", "bg-purple", "bg-sky", "bg-sky"] },
    violet: { ground: "bg-violet-ground", ink: "text-violet-ink", bars: ["bg-violet", "bg-violet", "bg-purple", "bg-violet"] },
  };
  
  barHeights = [9, 16, 12, 22];

  journal = {
    kicker: "THE PRODUCTS JOURNAL",
    issue: "العدد الأول",
    title: "مجلة المنتجات الرقمية",
    description: "أول مجلة علمية عربية متخصصة في المنتجات الرقمية.",
    cta: "اقرأ العدد الأول",
    image: "/figma/journal-cover.webp",
    href: "#",
  };

  researchPapers = [
    { id: "measure-dt-value", type: "بحث تطبيقي", tone: "sage", title: "كيف نقيس قيمة التحوّل الرقمي داخل المؤسسات؟", meta: "فريق DPC للبحث والابتكار · 2026 · 32 صفحة · PDF", href: "#" },
    { id: "success-metrics", type: "ورقة بحثية", tone: "sky", title: "مؤشرات نجاح المنتجات الرقمية: من الإطلاق إلى الأثر", meta: "فريق DPC للبحث والابتكار · 2026 · 24 صفحة · PDF", href: "#" },
    { id: "ba-rework", type: "دراسة حالة", tone: "violet", title: "تحليل الأعمال وإعادة العمل: ما الذي تكشفه المشاريع الفعلية؟", meta: "فريق DPC للبحث والابتكار · 2025 · 18 صفحة · PDF", href: "#" },
  ];
}