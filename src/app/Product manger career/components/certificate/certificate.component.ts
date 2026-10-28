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
  badgeText = input<string>('الشهادة');

  title = input<string>('شهادة معتمدة موقّعة من م. معاذ المصري');
  description = input<string>(
    'بعد إتمامك برنامج The Product Manager Career Accelerator بنجاح، ستحصل على شهادةٍ معتمدة وموقّعة من م. معاذ المصري تمنحك إثباتًا رسميًا لمسارك التدريبي، وتُعزّز ملفك المهني في مجال إدارة المنتجات الرقمية.',
  );

  certificateImage = input<string>('https://placehold.co/800x600?text=Certificate');
}
