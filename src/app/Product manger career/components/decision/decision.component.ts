import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decision.html'
})
export class DecisionComponent {
  

  pathOnePoints = signal([
    'تستمرّ في حضور Meetings كثيرة',
    'تسمع طلبات الـStakeholders',
    'تكتب Requirements وتتابع Delivery',
    'تدخل في نقاشاتٍ عن Features',
    'تشعر أنّك قريبٌ من Product… لكن لا تربط الصورة'
  ]);

  
  pathTwoPoints = signal([
    'تصبح الشخص الذي يفهم العميل، والبزنس، والفريق، والـ Data',
    'الشخص الذي عندما يدخل نقاشًا يكون كلامه مرتبًا',
    'وعندما يقترح قرارًا يكون وراءه منطق',
    'تعرف إلى أين يتحرك المنتج ولماذا',
    'تبني طريقة تفكير Product Manager حقيقي'
  ]);

  
  enrollNow() {
    console.log('Enrolling in Accelerator for $147');
  }
}