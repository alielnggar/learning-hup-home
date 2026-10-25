import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-icon',
  standalone: true,
  template: `
    <span aria-hidden="true"
          class="flex shrink-0 items-center justify-center rounded-full border font-plex text-base font-bold transition-colors duration-300"
          [class]="open ? 'border-navy bg-navy text-white' : 'border-neutral-border text-purple'"
          [style.width.px]="size" [style.height.px]="size">
      {{ open ? '−' : '+' }}
    </span>
  `
})
export class ToggleIconComponent {
  @Input() open = false;
  @Input() size = 32;
}