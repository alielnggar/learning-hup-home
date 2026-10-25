import { Component } from '@angular/core';

@Component({
  selector: 'app-join-cta',
  standalone: true,
  templateUrl: './join-cta.component.html'
})
export class JoinCtaComponent {
  floats = [
    { title: "Masterclass", sub: "تعلّم مع ممارسين", icon: "cta-icon-play", ground: "bg-accent-highlight", pos: "left-[920px] top-[120px]", iconSize: 16, drift: "drift-a" },
    { title: "بحث تطبيقي", sub: "من مشاريع حقيقية", icon: "cta-icon-chart", ground: "bg-sage-ground", pos: "left-[96px] top-[150px]", iconSize: 18, drift: "drift-b" },
    { title: "Frameworks", sub: "جاهزة للاستخدام", icon: "cta-icon-layers", ground: "bg-sky-100", pos: "left-[860px] top-[420px]", iconSize: 18, drift: "drift-c" },
    { title: "المجلة", sub: "العدد الأول", icon: "cta-icon-book", ground: "bg-violet-ground", pos: "left-[140px] top-[440px]", iconSize: 18, drift: "drift-a" },
  ];

  panes = [
    { left: 920, top: -170.8, opacity: 1 },
    { left: 700, top: -110.8, opacity: 0.6 },
    { left: 90, top: -150.8, opacity: 0.7 },
    { left: 310, top: -90.8, opacity: 0.45 },
  ];
}