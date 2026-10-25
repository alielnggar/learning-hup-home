import { Component, Input } from '@angular/core';
import { illustrations } from './illustrations.data';

@Component({
  selector: 'app-animated-illustration',
  standalone: true,
  template: `
    <svg width="380" height="232" viewBox="0 0 380 232" fill="none" overflow="visible" aria-hidden="true" class="block h-auto w-full">
      @for (layer of layers; track layer.id) {
        <path
          [attr.d]="isHovered && layer.hoverD ? layer.hoverD : layer.d"
          [attr.fill]="isHovered && layer.hover?.fill ? layer.hover?.fill : (layer.fill || 'none')"
          [attr.stroke]="isHovered && layer.hover?.stroke ? layer.hover?.stroke : (layer.stroke || 'none')"
          [attr.stroke-width]="layer['stroke-width']"
          [attr.stroke-linecap]="layer['stroke-linecap']"
          [attr.stroke-linejoin]="layer['stroke-linejoin']"
          [attr.stroke-dasharray]="layer['stroke-dasharray']"
          style="transition: all 350ms cubic-bezier(0.22, 1, 0.36, 1);"
        ></path>
      }
    </svg>
  `
})
export class AnimatedIllustrationComponent {
  @Input({ required: true }) name!: string;
  @Input() isHovered = false;

  get layers() {
    return illustrations[this.name as keyof typeof illustrations] || [];
  }
}