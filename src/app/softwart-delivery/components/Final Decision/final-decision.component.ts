import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-final-decision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './final-decision.html'
})
export class FinalDecisionComponent {
  
  pathOne = signal([
    'تحضر اجتماعاتٍ كثيرة',
    'تسمع طلبات أصحاب المصلحة',
    'تكتب Requirements وتتابع التسليم',
    'تدخل نقاشاتٍ عن الـFeatures',
    'تشعر أنّك قريبٌ من Product… لكنّك لا تربط الصورة'
  ]);

  pathTwo = signal([
    'تبني طريقة تفكير قائد منتجٍ حقيقي',
    'تسأل: لماذا؟ ولمن؟ ولماذا الآن؟ وكيف نعرف أنّه نجح؟',
    'تفهم العميل والعمل والفريق والبيانات',
    'يصير كلامك مرتّبًا، ووراء كلّ قرارٍ منطق',
    'تعرف إلى أين يتحرّك المنتج ولماذا'
  ]);
}