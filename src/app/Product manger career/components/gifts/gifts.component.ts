import { Component, input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Gift {
  id: string;
  title: string;
  desc: string;
  originalValue: string;
  image: string;
}

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gifts.html',
})
export class GiftsComponent {
  

  
  
  sectionTitle = input<string>('هدايا إضافية ستحصل عليها بشكلٍ حصري<br class="hidden md:block" />عند اشتراكك الآن');
  
 
  sectionDescription = input<string>('كلّ هديةٍ هنا مصمَّمة لتقليل وقت التعلّم، ورفع جودة قراراتك، وتسريع انتقالك إلى مستوى Product Manager عملي.');
  
 
  showBadge = input<boolean>(true);
  
  
  showBottomBanner = input<boolean>(true);
  
 
  limit = input<number | undefined>(undefined);

  
  allGifts = signal<Gift[]>([
    {
      id: '01',
      title: 'Product Manager Templates Vault',
      desc: 'قوالب جاهزة لـProduct Vision وStrategy وRoadmap وPRD وUser Stories وAcceptance Criteria وStakeholder Map وPrioritization وMVP Canvas وLaunch Checklist وMetrics Dashboard.',
      originalValue: '$200',
      image: '/products-manger-career/image 34.png',
    },
    {
      id: '02',
      title: 'Best 20 Books in Product',
      desc: 'قائمةٌ مختارة من أهمّ الكتب في المجال، حتى تعرف ماذا تقرأ وبأيّ اتجاه، بدلًا من الضياع وسط ترشيحاتٍ عشوائية.',
      originalValue: '$70',
      image: '/products-manger-career/image 34 (1).png',
    },
    {
      id: '03',
      title: 'Agile Common Mistakes Series',
      desc: 'ثلاث حلقاتٍ صوتية عن أخطاء Agile الشائعة التي تجعل الفرق «تطبّق Scrum» دون قيمةٍ حقيقية.',
      originalValue: '$120',
      image: '/products-manger-career/image 34 (2).png',
    },
    {
      id: '04',
      title: 'Practical Product Case Study Pack',
      desc: 'ستّ ورشٍ تطبيقية على مشاريع Product حقيقية، ومحاكاةٌ عملية كاملة بدلًا من المفاهيم النظرية.',
      originalValue: '$250',
      image: '/products-manger-career/image 34 (3).png',
    },
    {
      id: '05',
      title: 'DPC Community Access',
      desc: 'دخول لمدة سنة إلى مجتمع DPC للتعلم، والنقاش، ومتابعة محتوى Product وDigital Transformation',
      originalValue: '$100',
      image: '/products-manger-career/image 34 (4).png',
    },
    {
      id: '06',
      title: 'Discovery Question Bank',
      desc: 'بنك أسئلةٍ للـDiscovery تستخدمه مباشرةً في مقابلات المستخدمين وجلسات أصحاب المصلحة.',
      originalValue: '$60',
      image: '/products-manger-career/image 34.png',
    },
    {
      id: '07',
      title: 'Ask Moaaz Community',
      desc: 'Community للأسئلة والنقاش والدعم المهني والعملي مع معاذ',
      originalValue: 'لا يقدر بثمن',
      image: '/products-manger-career/image 34 (5).png',
    },
  ]);


  displayedGifts = computed(() => {
    const limitVal = this.limit();
    if (limitVal !== undefined && limitVal > 0) {
      return this.allGifts().slice(0, limitVal);
    }
    return this.allGifts();
  });
}