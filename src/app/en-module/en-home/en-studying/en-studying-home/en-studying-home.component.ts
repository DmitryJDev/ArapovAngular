import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-en-studying-home',
  templateUrl: './en-studying-home.component.html',
  styleUrl: './en-studying-home.component.scss',
})
export class EnStudyingHomeComponent {
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
    this.router.navigateByUrl('/en/home').then(() => {
      setTimeout(() => {
        this.scrollToRegistration();
      }, 100);
    });
  }
  scrollToRegistration() {
    const element = document.getElementById('registrationEn');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  // changeLanguage(lang: string) {
  //   // Получение текущего пути
  //   const currentPath = this.router.url;

  //   // Разделение пути на части
  //   const pathSegments = currentPath.split('/');

  //   // Замена языка в пути
  //   if (pathSegments[1] === 'uk' || pathSegments[1] === 'en') {
  //     pathSegments[1] = lang;
  //   } else {
  //     pathSegments.unshift(lang);
  //   }

  //   // Построение нового пути
  //   const newPath = pathSegments.join('/');

  //   // Перенаправление на новый путь
  //   this.router.navigateByUrl(newPath);
  // }
}
