import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-uk-home-page',
  templateUrl: './uk-home-page.component.html',
  styleUrl: './uk-home-page.component.scss',
})
export class UkHomePageComponent {
  constructor(private meta: Meta, private titleService: Title) {}
  ngOnInit(): void {
    // this.titleService.setTitle('Home Page');
    // this.meta.addTag({
    //   rel: 'canonical',
    //   href: 'https://arapov-trading.vercel.app/uk/home',
    // });
    this.setCanonicalURL('https://arapov-trading.vercel.app/uk/home');
  }

  setCanonicalURL(url?: string) {
    const canURL = url === undefined ? window.location.href : url;
    this.meta.addTag({ name: 'canonical', content: canURL });
  }

  scrollToRegistration() {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
