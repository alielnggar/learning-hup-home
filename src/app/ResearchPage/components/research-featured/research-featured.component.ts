// research-featured.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research-featured',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research-featured.html',
})
export class ResearchFeaturedComponent {
  @Output() openPaywall = new EventEmitter<void>();
}
