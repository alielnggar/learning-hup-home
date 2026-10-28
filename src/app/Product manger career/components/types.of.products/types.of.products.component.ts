import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-types-of-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './types.of.products.html'
})
export class TypesOfProductsComponent {
  typeOneItems = signal([
    'Ticket',
    'Task',
    'Meeting',
    'Follow-up',
    'Delivery'
  ]);

  typeTwoItems = signal([
    'لماذا نبني هذا المنتج؟',
    'من هو المستخدم الحقيقي؟',
    'ما المشكلة الصحيحة؟',
    'ما الأولوية؟',
    'كيف نقيس النجاح؟',
    'وكيف ينمو المنتج، بدلًا من أن يُسلَّم فقط؟'
  ]);
}