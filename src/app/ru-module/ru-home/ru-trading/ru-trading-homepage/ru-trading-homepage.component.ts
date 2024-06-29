import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-ru-trading-homepage',
  templateUrl: './ru-trading-homepage.component.html',
  styleUrl: './ru-trading-homepage.component.scss',
})
export class RuTradingHomepageComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      }
    });
  }
}
