import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-suitable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notsuitable.html',
})
export class NotSuitableComponent {
  
  reasons = signal([
    {
      title: 'تريد كورسًا خفيفًا وسريعًا بدون مجهود',
      desc: 'هذا البرنامج عمليٌّ ومكثّف. المحتوى مصمَّم ليعطيك رؤيةً كاملة، وليس مجرّد مقدّمةٍ سطحية أو مجموعة مصطلحات.',
    },
    {
      title: 'ليس لديك أيّ اهتمامٍ حقيقي بمجال المنتجات الرقمية',
      desc: 'إذا كنت لا تعمل ولا تنوي العمل في Software أو Digital Products أو Business Analysis أو Product أو Project Management أو UX أو Agile أو Digital Transformation، فقد لا يكون هذا البرنامج الخيار المناسب لك الآن.',
    },
    {
      title: 'تتوقّع أن تصبح Product Manager قويًا بدون ممارسة',
      desc: 'البرنامج يختصر عليك الطريق ويرتّب لك المعرفة ويعطيك أمثلةً وخريطةً واضحة. لكنّ التطوّر الحقيقي يحتاج إلى تركيزٍ وتطبيقٍ وتفكيرٍ وممارسةٍ داخل العمل أو على Case Studies.',
    },
    {
      title: 'تبحث عن شهادةٍ فقط',
      desc: 'إذا كان هدفك مجرّد الحصول على اسم كورسٍ أو شهادة، بدون تطبيقٍ أو تغييرٍ في طريقة التفكير، فلن تستفيد من البرنامج بالشكل الكامل.',
    },
  ]);
}
