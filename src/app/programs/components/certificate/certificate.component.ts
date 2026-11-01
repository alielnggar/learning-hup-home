import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate.html',
})
export class CertificateComponent {
  showBadge = input<boolean>(true);
  

  title = input<string>('شهادة إتمامٍ من DPC Consulting');
  description = input<string>(
   'بعد إتمام وحدات البرنامج وتسليم الـAssignments، تحصل على شهادة إتمامٍ من DPC Consulting تُوثّق مسارك التدريبي، مع وصولٍ للمحتوى لمدة 12 شهرًا.',
  );

  certificateImage = input<string>('https://placehold.co/800x600?text=Certificate');
}
