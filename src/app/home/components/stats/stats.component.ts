import { Component, ElementRef, OnInit, OnDestroy, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

type Stat = { value: number; prefix?: string; label: string; currentVal: number };

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './stats.html',
})
export class StatsComponent implements OnInit, OnDestroy {
  stats = signal<Stat[]>([
    { value: 10, label: 'برامج وماستر كلاس', currentVal: 0 },
    { value: 80, label: 'حزمة عمل جاهزة', currentVal: 0 },
    { value: 1300, prefix: '+', label: 'قالبٍ داخل الحزم', currentVal: 0 },
    { value: 4, label: 'مؤشرات نضج', currentVal: 0 },
    { value: 40, prefix: '+', label: 'ساعة محتوى تدريبي', currentVal: 0 },
    { value: 1000, prefix: '+', label: 'خرّيج من برامج DPC', currentVal: 0 },
  ]);

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.animateCounters();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private animateCounters() {
    const duration = 1400; 
    const frameRate = 16;
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = this.easeOut(frame / totalFrames);

      this.stats.update((currentStats) =>
        currentStats.map((stat) => ({
          ...stat,
          currentVal: Math.round(stat.value * progress),
        })),
      );

      if (frame === totalFrames) {
        clearInterval(interval);
      }
    }, frameRate);
  }

  
  private easeOut(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }
}
