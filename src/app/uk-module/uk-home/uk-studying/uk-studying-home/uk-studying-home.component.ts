import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-uk-studying-home',
  templateUrl: './uk-studying-home.component.html',
  styleUrl: './uk-studying-home.component.scss',
})
export class UkStudyingHomeComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      }
    });
  }

  navigateToHomeWithId() {
    this.router.navigateByUrl('/uk/home').then(() => {
      setTimeout(() => {
        this.scrollToRegistration();
      }, 100);
    });
  }
  scrollToRegistration() {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
