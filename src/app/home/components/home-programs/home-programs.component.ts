import { Component, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/ui/button/button.component';

type Domain =
  | 'all'
  | 'Product Management'
  | 'Business Analysis'
  | 'Software Delivery'
  | 'Digital Transformation';
type HomeCourse = {
  slug: string;
  title: string;
  domain: Domain;
  tone: 'violet' | 'sage' | 'sky';
  cover: string;
};

@Component({
  selector: 'app-home-programs',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './home-programs.component.html',
})
export class HomeProgramsComponent {
  tabs: { value: Domain; label: string }[] = [
    { value: 'all', label: 'الكل' },
    { value: 'Product Management', label: 'Product Management' },
    { value: 'Business Analysis', label: 'Business Analysis' },
    { value: 'Software Delivery', label: 'Software Delivery' },
    { value: 'Digital Transformation', label: 'Digital Transformation' },
  ];

  courses: HomeCourse[] = [
    {
      slug: 'agile-tech-productivity',
      title: 'Boost Your Tech Productivity with',
      domain: 'Software Delivery',
      tone: 'sky',
      cover: 'boost',
    },
     {
      slug: 'agile-tech-productivity',
      title: 'Boost Your Tech Productivity with',
      domain: 'Digital Transformation',
      tone: 'sky',
      cover: 'boost',
    },
    {
      slug: 'business-analysis-masterclass',
      title: 'Business Analysis Masterclass',
      domain: 'Business Analysis',
      tone: 'sage',
      cover: 'ba',
    },
    {
      slug: 'business-analysis-masterclass',
      title: 'Business Analysis Masterclass',
      domain: 'Business Analysis',
      tone: 'sage',
      cover: 'ba',
    },
    {
      slug: 'advanced-product-management',
      title: 'Advanced Product Management',
      domain: 'Product Management',
      tone: 'violet',
      cover: 'advanced',
    },

    {
      slug: 'advanced-product-management',
      title: 'Advanced Product Management',
      domain: 'Product Management',
      tone: 'violet',
      cover: 'advanced',
    },
  ];

  tones = {
    violet: 'bg-violet-100 text-violet-ink',
    sage: 'bg-sage-100 text-sage-ink',
    sky: 'bg-sky-100 text-sky-ink',
  };

  meta = [
    { icon: 'icon-duration.svg', text: '15 ساعة' },
    { icon: 'icon-units.svg', text: '5 وحدات' },
    { icon: 'icon-level.svg', text: 'متقدّم' },
  ];

  selectedDomain = signal<Domain>('all');

  visibleCourses = computed(() => {
    const domain = this.selectedDomain();
    return domain === 'all' ? this.courses : this.courses.filter((c) => c.domain === domain);
  });

  setDomain(domain: Domain) {
    this.selectedDomain.set(domain);
  }

  onTabKeyDown(event: KeyboardEvent, index: number) {
    const delta = event.key === 'ArrowLeft' ? 1 : event.key === 'ArrowRight' ? -1 : 0;
    const next = delta
      ? (index + delta + this.tabs.length) % this.tabs.length
      : event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? this.tabs.length - 1
          : -1;
    if (next >= 0) {
      event.preventDefault();
      this.setDomain(this.tabs[next].value);
    }
  }
}
