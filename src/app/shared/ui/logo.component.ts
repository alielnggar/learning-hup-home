import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a routerLink="/" [class]="'flex items-center gap-[5px] ' + className" aria-label="DPC — التعلم والابتكار">
      <div class="relative h-[33px] w-[67.5px] overflow-hidden">
        <img src="/figma/logo-dpc.png" alt="" class="absolute top-[-28.21%] left-[-8.38%] h-[164.1%] w-[213.01%] max-w-none" />
      </div>
      <span class="h-[23.6px] w-[0.84px] bg-navy"></span>
      <span class="text-[13.5px] leading-[1.4] font-bold text-[#171359]">
        التعلم<br />والابتكار
      </span>
    </a>
  `
})
export class LogoComponent {
  @Input() className = '';
}