import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutModalComponent } from '../../../shared/components/checkout-modal/checkout-modal.component';

interface OfferItem {
  name: string;
  price: string;
  isTextPrice?: boolean;
}

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule, CheckoutModalComponent],
  templateUrl: './offer.html',
})
export class OfferComponent {
  @Input() courseSlug: 'software-delivery' | 'product-management' = 'product-management';

  isModalOpen = signal(false);

  offerItems = signal<OfferItem[]>([
    { name: ' ساعة Product Management Training +30  - البرنامج الأساسي  ', price: '$697' },
    { name: 'Product Manager Templates Vault + Metrics Dashboard', price: '$200' },
    { name: 'Best 20 Books in Product', price: '$70' },
    { name: '6 Case Studies + Practical Workshops', price: '$250' },
    { name: 'Agile Common Mistakes Series', price: '$120' },
    { name: 'Discovery Question Bank', price: '$60' },
    { name: 'DPC Community (سنة كاملة)', price: '$100' },
    { name: 'Webinars + Ask Moaaz Support', price: 'لا يقدر بثمن', isTextPrice: true },
  ]);

  guarantees = signal([
    'ضمان استرداد 100% لمدة 30 يومًا',
    'وصولٌ فوري بعد الدفع',
    '100% محتوى عربي عملي',
  ]);

  checkout() {
    this.isModalOpen.set(true);
  }
}
