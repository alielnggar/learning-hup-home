import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/ui/button/button.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './books.component.html'
})
export class BooksComponent {
  books = [
    { title: "استراتيجية المنتج", en: "Product Strategy", date: "الربع الثالث 2027", image: "book-strategy.png", dot: "#82c3ec", frame: "w-[200px]", crop: { width: "118.47%", height: "105.31%", left: "-12.97%", top: "-4.51%" } },
    { title: "من منتج إلى شركة", en: "From Product to Venture", date: "فبراير 2027", image: "book-venture.png", dot: "#746dc6", frame: "w-[221px]", crop: { width: "120.04%", height: "111.04%", left: "-10.02%", top: "-6.87%" } },
    { title: "اقتصاديات المنتج", en: "Product Economics", date: "الربع الأول 2027", image: "book-economics.png", dot: "#8aa873", frame: "w-[200px]", crop: { width: "112.14%", height: "112.14%", left: "-3.44%", top: "-4.89%" } },
  ];
}