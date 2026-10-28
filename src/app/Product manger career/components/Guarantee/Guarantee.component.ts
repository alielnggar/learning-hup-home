import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guarantee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Guarantee.html'
})
export class Guaranteecomponent {
  showBadge = input<boolean>(true);
  badgeText = input<string>('ضمان ذهبي');

 
  title = input<string>('نحن نتحمّل كلّ المخاطرة لمدة 30 يومًا كاملة');
  description = input<string>(
    'إذا حضرت البرنامج، واتّبعت المحتوى، وشعرت أنّك لم تصل إلى المخرجات المتوقَّعة — يمكنك طلب استرداد 100%. الضمان موجودٌ ليكون قرارك أسهل: نحن واثقون في قيمة المحتوى، وأنت يجب أن تدخل وأنت مطمئن.'
  );
}