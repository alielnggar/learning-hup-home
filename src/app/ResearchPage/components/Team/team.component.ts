import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.html'
})
export class TeamComponent {
  members = [0, 1, 2];
  tags = ["Discovery", "Enterprise UX"];
}