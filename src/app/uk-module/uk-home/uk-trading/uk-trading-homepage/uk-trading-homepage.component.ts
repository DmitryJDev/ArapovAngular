import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-uk-trading-homepage',
  templateUrl: './uk-trading-homepage.component.html',
  styleUrl: './uk-trading-homepage.component.scss',
})
export class UkTradingHomepageComponent {
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
