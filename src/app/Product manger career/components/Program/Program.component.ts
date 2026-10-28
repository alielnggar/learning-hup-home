import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Program.html',
})
export class ProgramComponent {
 
  skills = signal([
    { name: 'Data', color: 'bg-sky' },
    { name: 'Delivery', color: 'bg-violet' },
    { name: 'UX', color: 'bg-purple-600' },
    { name: 'Tech', color: 'bg-sky' },
    { name: 'Users', color: 'bg-violet' },
    { name: 'Business', color: 'bg-purple-600' },
    { name: 'Growth', color: 'bg-neutral-text' },
  ]);
}
