import { Component, signal, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('lerning-hub');

  constructor() {
    afterNextRender(() => {
      AOS.init({
        once: true,      
        duration: 800,   
        offset: 100,     
        easing: 'ease-in-out-cubic', 
      });
      
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    });
  }
}