import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-programs-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './programs-hero.html',
})
export class ProgramsHeroComponent {
  @Output() search = new EventEmitter<{ query: string; level: string }>();

  searchQuery = signal('');
  selectedLevel = signal('all');

  onSubmit(event: Event) {
    event.preventDefault();
    this.search.emit({ query: this.searchQuery(), level: this.selectedLevel() });
  }
}