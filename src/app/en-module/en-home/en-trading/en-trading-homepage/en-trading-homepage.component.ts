import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-en-trading-homepage',
  templateUrl: './en-trading-homepage.component.html',
  styleUrl: './en-trading-homepage.component.scss',
})
export class EnTradingHomepageComponent {
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
