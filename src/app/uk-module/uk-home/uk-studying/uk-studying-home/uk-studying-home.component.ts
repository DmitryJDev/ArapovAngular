import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uk-studying-home',
  templateUrl: './uk-studying-home.component.html',
  styleUrl: './uk-studying-home.component.scss',
})
export class UkStudyingHomeComponent {
  constructor(private router: Router) {}

  changeLanguage(lang: string) {
    // Получение текущего пути
    const currentPath = this.router.url;

    // Разделение пути на части
    const pathSegments = currentPath.split('/');

    // Замена языка в пути
    if (pathSegments[1] === 'uk' || pathSegments[1] === 'en') {
      pathSegments[1] = lang;
    } else {
      pathSegments.unshift(lang);
    }

    // Построение нового пути
    const newPath = pathSegments.join('/');

    // Перенаправление на новый путь
    this.router.navigateByUrl(newPath);
  }
}
