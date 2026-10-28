import { Component, signal, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
// تأكد من استدعاء ملف الـ CSS الخاص بـ AOS هنا (ضروري جداً لعمل الأنيميشن)
import { HeaderComponent } from './shared/components/header/header.share.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css', // أو styles.css حسب مشروعك
})
export class App {
  protected readonly title = signal('lerning-hub');

  constructor() {
    // afterNextRender يضمن تشغيل الكود في المتصفح فقط وبعد تحميل عناصر الـ DOM
    afterNextRender(() => {
      AOS.init({
        once: true,      // الأنيميشن يعمل مرة واحدة
        duration: 800,   // مدة الأنيميشن
        offset: 100,     // المسافة قبل بدء الأنيميشن
        easing: 'ease-in-out-cubic', // نعومة الحركة
      });
      
      // أمر إضافي ينشط AOS في حالة تغير الروتينج
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    });
  }
}