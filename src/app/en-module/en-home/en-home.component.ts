import { Component } from '@angular/core';

@Component({
  selector: 'app-en-home',
  templateUrl: './en-home.component.html',
  styleUrl: './en-home.component.scss',
})
export class EnHomeComponent {
  isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
