import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lerning-hub');
  ngOnInit() {
    
    AOS.init({
      once: true, 
      duration: 800, 
      offset: 100, 
    });
  }
}
