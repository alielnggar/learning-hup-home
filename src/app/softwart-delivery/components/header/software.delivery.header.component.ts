import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-software-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './software.delivery.header.html',
})
export class SoftwareHeroComponent {
  isVideoPlaying = signal(false);

  features = signal([
    { text: '15 ساعة', color: 'bg-purple-600' },
    { text: '5 وحدات', color: 'bg-purple-600' },
    { text: 'Assignments واختبارات', color: 'bg-purple-600' },
  ]);

  playVideo() {
    this.isVideoPlaying.set(true);
  }

  buyNow() {
    console.log('Redirecting to checkout...');
  }
}
