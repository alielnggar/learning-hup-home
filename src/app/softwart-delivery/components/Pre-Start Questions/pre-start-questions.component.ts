import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-pre-start-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pre-start-questions.html'
})
export class PreStartQuestionsComponent {
  openId = signal<number | null>(0);

  faqs = signal<FAQ[]>([
    {
      question: 'كم ساعة أحتاج أسبوعيًا؟',
      answer: 'نحو 3 إلى 4 ساعات: محاضرةٌ مسجّلة، وAssignment قصير تطبّقه على منتجك. تتقدّم بإيقاعك، والمحتوى متاحٌ طوال مدة الوصول.'
    },
    {
      question: 'هل أحتاج خلفيةً تقنية؟',
      answer: 'لا يشترط أن تكون مبرمجاً، البرنامج سيعطيك المعرفة الكافية للتواصل مع الفرق التقنية بشكل احترافي وفهم دورة حياة السوفتوير.'
    },
    {
      question: 'ما الفرق بين البرنامج وشهادات مثل PMP أو Scrum؟',
      answer: 'تلك الشهادات تركز على أطر عمل محددة أو إدارة مشاريع بحتة. هذا البرنامج يركز على إدارة المنتجات من الفكرة حتى النمو، مع ربط البزنس بالتقنية.'
    },
    {
      question: 'هل أستطيع تطبيق ما أتعلّمه في عملي الحالي؟',
      answer: 'بالتأكيد، كل وحدة تنتهي بـ Assignment مصمم خصيصاً لتطبقه على المنتج الذي تعمل عليه حالياً.'
    },
    {
      question: 'ماذا يحدث بعد أن أشترك؟',
      answer: 'يصلك بريد إلكتروني فوراً ببيانات الدخول للمنصة لبدء التعلم، وروابط الانضمام للمجتمع الخاص بالمتدربين.'
    },
    {
      question: 'كيف يعمل ضمان الاسترداد؟',
      answer: 'إذا شاهدت المحتوى وطبقت المهام ولم تجد القيمة المرجوة خلال أول 14 يوماً، يمكنك مراسلتنا واسترداد مبلغك بالكامل.'
    }
  ]);

  toggleFaq(index: number) {
    this.openId.update(current => (current === index ? null : index));
  }

  contactUs() {
    console.log('Redirecting to contact page...');
  }
}