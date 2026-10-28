import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CheckoutPayload {
  email: string;
  name: string;
  slug: 'software-delivery' | 'product-management';
}

export interface CheckoutResponse {
  status: number;
  message: string;
  data: {
    payment_url: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private http = inject(HttpClient);
  private apiUrl = 'https://digital-products.online/api/course-payments/checkout';

  initiatePayment(data: CheckoutPayload): Observable<CheckoutResponse> {
    return this.http.post<CheckoutResponse>(this.apiUrl, data);
  }
}
