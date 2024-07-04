import { Component, OnInit } from '@angular/core';
import { CanonicalService } from '../../../../../servises/canonical.service';
@Component({
  selector: 'app-home-uk-eight',
  templateUrl: './home-uk-eight.component.html',
  styleUrl: './home-uk-eight.component.scss',
})
export class HomeUkEightComponent implements OnInit {
  constructor(private canonicalService: CanonicalService) {}

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL(
      'https://arapov-trading.vercel.app/uk/trading/currenciesAndQuotes'
    );
  }
}
