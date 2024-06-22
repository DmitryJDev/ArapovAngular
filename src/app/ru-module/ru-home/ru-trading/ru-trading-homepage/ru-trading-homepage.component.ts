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

  routById(event: Event) {
    const target = event.target as HTMLElement;
    const id = target.closest('.programm__list')?.getAttribute('data-id');

    if (id) {
      this.router.navigate([`/ru/trading/${id}`]);
    } else {
      console.error('ID not found');
    }
  }
}
