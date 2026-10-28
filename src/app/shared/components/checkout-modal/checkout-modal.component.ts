import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckoutService, CheckoutPayload } from '../../../service/checkout.service';

@Component({
  selector: 'app-checkout-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout-modal.component.html',
})
export class CheckoutModalComponent {
  @Input() isOpen = false;
  @Input() courseSlug: 'software-delivery' | 'product-management' = 'product-management';
  @Output() close = new EventEmitter<void>();

  private checkoutService = inject(CheckoutService);

  name = '';
  email = '';
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  onSubmit() {
    if (!this.name.trim() || !this.email.trim()) {
      this.errorMessage.set('يرجى ملء جميع الحقول.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.email.trim())) {
      this.errorMessage.set('يرجى إدخال بريد إلكتروني صحيح.');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const payload: CheckoutPayload = {
      name: this.name.trim(),
      email: this.email.trim(),
      slug: this.courseSlug,
    };

    this.checkoutService.initiatePayment(payload).subscribe({
      next: (response) => {
        if (response.status === 200 && response.data?.payment_url) {
          window.location.href = response.data.payment_url;
        } else {
          this.errorMessage.set('حدث خطأ غير متوقع. يرجى المحاولة لاحقاً.');
          this.isLoading.set(false);
        }
      },
      error: (err) => {
        this.errorMessage.set('تعذر الوصول لبوابة الدفع. تأكد من اتصالك بالإنترنت.');
        this.isLoading.set(false);
        console.error(err);
      },
    });
  }
}
