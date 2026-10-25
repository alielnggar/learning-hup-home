import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../app/shared/ui/button/button.component';

@Component({
  selector: 'app-kits',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './kits.component.html'
})
export class KitsComponent {
  kits = [
    { title: "اكتشاف المنتج", en: "Product Discovery Kit", image: "kit-discovery.png" },
    { title: "خارطة الطريق والأولويات", en: "Roadmapping & Prioritization Kit", image: "kit-roadmap.png" },
    { title: "الإطلاق والدخول للسوق", en: "Product Launch & Go-to-Market Kit", image: "kit-launch.png" },
    { title: "مؤشرات المنتج والنمو", en: "Product Metrics & Growth Kit", image: "kit-metrics.png" },
  ];
}