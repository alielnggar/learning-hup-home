import { Component, ElementRef, ViewChild, afterNextRender, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-problem-highlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problem-highlight.component.html',
})
export class ProblemHighlightComponent {
 
  @ViewChild('sectionContainer') sectionContainer!: ElementRef<HTMLElement>;
  
  @ViewChild('textContainer') textContainer!: ElementRef<HTMLDivElement>;

  lines = signal([
    {
      fragments: [{ text: 'المشكلة ليست أنَّك ' }, { text: 'لا تعرف', isHighlighted: true }],
    },
    {
      fragments: [
        { text: 'المشكلة أنَّ ما تعرفه جاء من ' },
        { text: 'أماكنَ مختلفة', isHighlighted: true },
      ],
    },
    {
      fragments: [
        { text: 'وهذا ما سنعالجه ' },
        { text: 'بشكلٍ كامل', isHighlighted: true },
        { text: ' في هذه الدبلومة.' },
      ],
    },
  ]);

  constructor() {
    afterNextRender(() => {
      this.initScrollAnimation();
    });
  }

  initScrollAnimation() {
    const section = this.sectionContainer.nativeElement;
    const words = this.textContainer.nativeElement.querySelectorAll('.reveal-word');

    // إعداد الـ GSAP مع التثبيت (Pinning)
    gsap.fromTo(
      words,
      {
        opacity: 0.2, // شفافية البداية
      },
      {
        opacity: 1, // شفافية النهاية
        stagger: 0.1, // التتابع بين الكلمات
        ease: 'none', // انتقال خطي سلس
        scrollTrigger: {
          trigger: section,
          pin: true, // 📌 السر هنا: تثبيت السكشن بالكامل أثناء السكرول
          start: 'top top', // يبدأ التثبيت عندما يلمس أعلى السكشن أعلى الشاشة
          end: '+=150%', // مدة التثبيت: يستمر التثبيت لمسافة تساوي 150% من طول الشاشة
          scrub: 1, // حركة ناعمة مرتبطة بالسكرول
        },
      },
    );
  }
}
