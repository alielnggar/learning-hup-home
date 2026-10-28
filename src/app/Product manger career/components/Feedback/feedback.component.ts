import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  experience: string;
  videoTitle: string;
}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.html',
})
export class FeedbackComponent {
  activeIndex = signal(0);

  testimonials = signal<Testimonial[]>([
    {
      id: 1,
      videoTitle: 'Video 1',
      name: 'أحمد اسماعيل',
      location: 'الرياض',
      experience: 'خبرة 10 سنوات في السوفتوير',
    },
    {
      id: 2,
      videoTitle: 'Video 1',
      name: 'أحمد اسماعيل',
      location: 'الرياض',
      experience: 'خبرة 10 سنوات في السوفتوير',
    },
    {
      id: 3,
      videoTitle: 'Video 1',
      name: 'أحمد اسماعيل',
      location: 'الرياض',
      experience: 'خبرة 10 سنوات في السوفتوير',
    },
    {
      id: 4,
      videoTitle: 'Video 1',
      name: 'أحمد اسماعيل',
      location: 'الرياض',
      experience: 'خبرة 10 سنوات في السوفتوير',
    },
  ]);

  totalSlides = computed(() => this.testimonials().length);

  nextSlide() {
    this.activeIndex.update((i) => (i + 1) % this.totalSlides());
  }

  prevSlide() {
    this.activeIndex.update((i) => (i - 1 + this.totalSlides()) % this.totalSlides());
  }

  goToSlide(index: number) {
    this.activeIndex.set(index);
  }

  handleCardClick(index: number) {
    if (index !== this.activeIndex()) {
      this.goToSlide(index);
    }
  }

  getCardClass(index: number): string {
    const active = this.activeIndex();
    const total = this.totalSlides();

    if (index === active) {
      return 'z-30 scale-100 translate-x-0 opacity-100 shadow-2xl';
    }

    if (index === (active + 1) % total) {
      return 'z-20 scale-[0.85] -translate-x-[100%] md:-translate-x-[110%] lg:-translate-x-[120%] opacity-55 cursor-pointer';
    }

    if (index === (active - 1 + total) % total) {
      return 'z-20 scale-[0.85] translate-x-[100%] md:translate-x-[110%] lg:translate-x-[120%] opacity-55 cursor-pointer';
    }

    let diff = index - active;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff > 0
      ? 'z-0 -translate-x-[200%] scale-75 opacity-0 pointer-events-none'
      : 'z-0 translate-x-[200%] scale-75 opacity-0 pointer-events-none';
  }

  playVideo(event: MouseEvent) {
    event.stopPropagation();

    const button = event.currentTarget as HTMLButtonElement;
    const card = button.parentElement;
    const video = card?.querySelector('video');

    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => {
          button.style.display = 'none';
        })
        .catch(() => {
          //
        });
    } else {
      video.pause();
      button.style.display = 'flex';
    }

    video.onended = () => {
      button.style.display = 'flex';
    };
  }
}
