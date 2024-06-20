import { Component } from '@angular/core';

@Component({
  selector: 'app-uk-home-page',
  templateUrl: './uk-home-page.component.html',
  styleUrl: './uk-home-page.component.scss',
})
export class UkHomePageComponent {
  scrollToRegistration() {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
