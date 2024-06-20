import { Component } from '@angular/core';

@Component({
  selector: 'app-ru-home-page',
  templateUrl: './ru-home-page.component.html',
  styleUrl: './ru-home-page.component.scss',
})
export class RuHomePageComponent {
  scrollToRegistrationRu() {
    const element = document.getElementById('registrationRu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
