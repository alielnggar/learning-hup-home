import { Component, ElementRef, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-indicators',
  standalone: true,
  imports: [CommonModule, RouterModule, DecimalPipe],
  templateUrl: './indicators.component.html'
})
export class IndicatorsComponent implements OnInit, OnDestroy {
  bars = [
    { label: "الاستراتيجية والرؤية", target: 3.1, current: 0 },
    { label: "الاكتشاف وفهم العميل", target: 2.8, current: 0 },
    { label: "التسليم والتشغيل", target: 3.9, current: 0 },
    { label: "القياس والأثر", target: 2.6, current: 0 },
  ];

  cards = [
    { title: "مؤشر فكرة", desc: "يقيس وضوح الفكرة وجدواها قبل بناء المنتج.", icon: "ind-idea.svg", bg: "#f3e9fc", href: "/indicators/idea" },
    { title: "مؤشر تسليم", desc: "يقيس انتظام التسليم وسرعته وجودة التنفيذ.", icon: "ind-delivery.svg", bg: "#e6efdd", href: "/indicators/delivery" },
    { title: "مؤشر تجربة", desc: "يقيس تجربة المستخدم ورضا العملاء.", icon: "ind-experience.svg", bg: "#deeef9", href: "/indicators/experience" },
  ];

  inView = signal(false);
  featuredScore = signal(0);
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.inView.set(true);
        this.animateScores();
        this.observer?.disconnect();
      }
    }, { threshold: 0.5 });
    
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private animateScores() {
    const duration = 1200;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = this.easeOut(currentStep / steps);
      
      this.featuredScore.set(3.4 * progress);
      this.bars = this.bars.map(bar => ({
        ...bar,
        current: bar.target * progress
      }));

      if (currentStep >= steps) clearInterval(interval);
    }, stepTime);
  }

  private easeOut(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }
}