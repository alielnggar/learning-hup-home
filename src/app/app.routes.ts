import { Routes } from '@angular/router';
import { ProductmangerComponent } from './Product manger career/Product.manger.career.component';
import { SoftwartDeliveryComponent } from './softwart-delivery/softwart-delivery.component';
import { SuccessPaymentComponent } from './shared/components/success-payment/success-payment.component';

export const routes: Routes = [
  {
    path: 'programs/productmanagement',
    component: ProductmangerComponent,
    title: 'Product Manager Career Accelerator',
  },
  {
    path: 'programs/softwaredelivery',
    component: SoftwartDeliveryComponent,
    title: 'Software Delivery Excellence',
  },
  {
    path: 'success-payment',
    component: SuccessPaymentComponent,
    title: 'تم الدفع بنجاح',
  },
  {
    path: '',
    redirectTo: 'programs/productmanagement',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'programs/productmanagement',
  },
];