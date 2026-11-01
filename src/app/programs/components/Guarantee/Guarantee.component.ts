import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guarantee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Guarantee.html',
})
export class Guaranteecomponent {
  showBadge = input<boolean>(true);
  badgeText = input<string>('المخاطرة علينا، والقرار لك.');

  title = input<string>('جرّب أيّ برنامج دون مخاطرة');
  description = input<string>(
    'إذا بدأت أيّ برنامج والتزمت بمحتواه ولم تجد فيه ما وعدناك به، يمكنك طلب استردادٍ كامل خلال 14 يومًا من تاريخ الشراء.',
  );
}
