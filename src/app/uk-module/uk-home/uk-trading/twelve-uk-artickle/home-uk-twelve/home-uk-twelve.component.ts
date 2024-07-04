import { Component, OnInit } from '@angular/core';
import { CanonicalService } from '../../../../../servises/canonical.service';
@Component({
  selector: 'app-home-uk-twelve',
  templateUrl: './home-uk-twelve.component.html',
  styleUrl: './home-uk-twelve.component.scss',
})
export class HomeUkTwelveComponent implements OnInit {
  constructor(private canonicalService: CanonicalService) {}
  ngOnInit() {
    this.canonicalService.setCanonicalURL(
      'https://arapov-trading.vercel.app/uk/trading/howToMakeMoney'
    );
  }
}
