import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type Variant = 'primary' | 'soft' | 'outline' | 'white' | 'gradient' | 'glow';
type Size = 'lg' | 'md';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() variant: Variant = 'primary';
  @Input() size: Size = 'lg';
  @Input() arrow = false;
  @Input() href = '#';
  @Input() className = '';

  variants: Record<Variant, string> = {
    primary: 'bg-navy text-white hover:bg-[#150f3a]',
    soft: 'bg-violet-ground text-navy hover:bg-accent-highlight',
    outline: 'border-[1.5px] border-neutral-border text-navy hover:border-navy/40 hover:bg-neutral-ground',
    white: 'bg-white text-navy hover:bg-[#f1eff9]',
    gradient: 'text-white bg-[linear-gradient(176deg,var(--purple-600)_0%,var(--violet)_100%)] hover:brightness-95',
    glow: 'group/glow relative overflow-hidden bg-navy font-bold text-white shadow-[0_14px_30px_rgba(33,25,81,0.22)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(33,25,81,0.32)]',
  };

  sizes: Record<Size, string> = {
    lg: 'h-[52px] px-6 text-base',
    md: 'h-10 px-4 text-base',
  };
}