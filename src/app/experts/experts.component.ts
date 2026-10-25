import { Component } from '@angular/core';

@Component({
  selector: 'app-experts',
  standalone: true,
  templateUrl: './experts.component.html'
})
export class ExpertsComponent {
  shared = {
    role: "مستشار استراتيجية المنتج",
    bio: "قاد فرق منتجاتٍ رقمية في القطاع المالي، ويكتب عن ربط الاستراتيجية بالتنفيذ.",
    tags: ["Discovery", "Enterprise UX"],
    href: "#",
  };

  experts = [
    { id: "moaz", name: "معاذ المصري", photo: "/figma/expert-moaz.png", ...this.shared },
    { id: "ahmed", name: "احمد الشيخ", photo: "/figma/expert-ahmed.png", ...this.shared },
    { id: "bassam", name: "بسام سالم", photo: "/figma/expert-bassam.png", ...this.shared },
  ];
}