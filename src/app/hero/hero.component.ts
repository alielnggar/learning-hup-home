import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '.././shared/ui/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit, OnDestroy {
  words = ["المعرفة", "البحث", "النشر", "الأدوات", "التعلّم"];
  currentWordIndex = signal(0);
  intervalId: any;

  panes = [
    { left: 1170, top: -103.7, w: 218.7, h: 431, pw: 230, ph: 360, drift: "drift-a" },
    { left: 960, top: -43.7, w: 218.7, h: 471, pw: 230, ph: 400, drift: "drift-b" },
    { left: 740, top: -153.7, w: 218.7, h: 511, pw: 230, ph: 440, drift: "drift-c" },
    { left: 540, top: 1.9, w: 247.3, h: 480.3, pw: 260, ph: 400, drift: "drift-a" },
    { left: 330, top: -93.7, w: 218.7, h: 471, pw: 230, ph: 400, drift: "drift-b" },
    { left: 100, top: -26.6, w: 237.8, h: 507.3, pw: 250, ph: 430, drift: "drift-c" },
    { left: -60, top: -69.3, w: 190.2, h: 461.8, pw: 200, ph: 400, drift: "drift-a" },
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentWordIndex.update(i => (i + 1) % this.words.length);
    }, 2400);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}