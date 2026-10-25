import { Component , signal } from '@angular/core';
import { AnimatedIllustrationComponent } from '../../app/shared/ui/explore/animated-illustration.component';

@Component({
  selector: 'app-explore',
  imports: [AnimatedIllustrationComponent],
  standalone: true,
  templateUrl: './explore.component.html'
})
export class ExploreComponent {

    hoveredCard = signal<string | null>(null);
  cards = [
    { tag: "التعلّم", tagColor: "text-purple", title: "‏Masterclasses والبرامج", body: "تعلّمٌ عميق مع ممارسين، ومسارات تربط الفهم بالممارسة.", cta: "اكتشف البرامج", bg: "linear-gradient(152.4deg, #cbc7ef 0%, #e4e2f6 68%, #fff 100%)", illustration: "masterclasses" },
    { tag: "البحث والابتكار", tagColor: "text-sage-ink", title: "الأبحاث والمقالات", body: "أبحاثٌ تطبيقية وInsights تحوّل الخبرة إلى معرفةٍ قابلة للنقاش.", cta: "اكتشف الأبحاث", bg: "linear-gradient(152.4deg, #cfddc3 0%, #e6eedf 68%, #fff 100%)", illustration: "research" },
    { tag: "النماذج", tagColor: "text-sky-ink", title: "‏Frameworks وModels", body: "طرق عمل ونماذج تساعدك على فهم السياق واتخاذ قرارٍ أوضح.", cta: "اكتشف النماذج", bg: "linear-gradient(152.4deg, #bfe1f6 0%, #dff0fa 68%, #fff 100%)", illustration: "frameworks" },
    { tag: "الأدوات", tagColor: "text-violet-ink", title: "‏Tools وTemplates وKits", body: "أدوات جاهزة تنقل المعرفة من القراءة إلى الاستخدام داخل العمل.", cta: "اكتشف الأدوات", bg: "linear-gradient(152.4deg, #dcc6f6 0%, #efe4fb 68%, #fff 100%)", illustration: "tools" },
    { tag: "المنشورات", tagColor: "text-purple", title: "الكتب والمجلة", body: "كتبٌ رقمية ومطبوعة، ومجلة المنتجات الرقمية.", cta: "تصفّح المكتبة", bg: "linear-gradient(152.4deg, #cbc7ef 0%, #e4e2f6 68%, #fff 100%)", illustration: "books" },
    { tag: "الفعاليات", tagColor: "text-sky-ink", title: "‏Webinars والفعاليات", body: "نقاشاتٌ مع خبراء، وندوات وتسجيلات تربط الأفكار بالممارسة.", cta: "الفعاليات القادمة", bg: "linear-gradient(152.4deg, #bfe1f6 0%, #dff0fa 68%, #fff 100%)", illustration: "webinars" },
  ];
}