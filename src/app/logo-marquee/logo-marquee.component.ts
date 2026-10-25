import { Component } from '@angular/core';


const BASE_LOGOS = [
  { file: "trusted-18.png", width: 152, height: 52 },
  { file: "trusted-13.png", width: 72, height: 72 },
  { file: "trusted-14.png", width: 104, height: 80 },
  { file: "trusted-16.png", width: 104, height: 80 },
  { file: "trusted-19.png", width: 48, height: 48 },
  { file: "trusted-12.png", width: 64, height: 64 },
  { file: "trusted-15.png", width: 104, height: 80 },
  { file: "trusted-17.png", width: 104, height: 80 },
];

@Component({
  selector: 'app-logo-marquee',
  standalone: true,
  templateUrl: './logo-marquee.component.html'
})
export class LogoMarqueeComponent {

logos = [...BASE_LOGOS, ...BASE_LOGOS];
}