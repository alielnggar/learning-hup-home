import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.header.component.html',
})
export class ProductHeaderComponent {
  isVideoPlaying = signal(false);

  playVideo() {
    this.isVideoPlaying.set(true);
    console.log('Video Play Triggered');
  }

  startJourney() {
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
