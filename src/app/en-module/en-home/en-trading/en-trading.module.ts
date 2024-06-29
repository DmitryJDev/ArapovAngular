import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnTradingHomepageComponent } from './en-trading-homepage/en-trading-homepage.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EnTradingHomepageComponent },
  // { path: 'adviceForBeginners', component: EnTradingArticleOneComponent },
  {
    path: 'adviceForBeginners',
    loadChildren: () =>
      import('./one-en-article/one-en-article.module').then(
        (m) => m.OneEnArticleModule
      ),
  },
  {
    path: 'marketBasics',
    loadChildren: () =>
      import('./two-en-article/two-en-article.module').then(
        (m) => m.TwoEnArticleModule
      ),
  },
  {
    path: 'exchange',
    loadChildren: () =>
      import('./three-en-article/three-en-article.module').then(
        (m) => m.ThreeEnArticleModule
      ),
  },
  {
    path: 'exchangeMarket',
    loadChildren: () =>
      import('./four-en-article/four-en-article.module').then(
        (m) => m.FourEnArticleModule
      ),
  },
  {
    path: 'derivatives',
    loadChildren: () =>
      import('./five-en-article/five-en-article.module').then(
        (m) => m.FiveEnArticleModule
      ),
  },
  {
    path: 'exchangeParticipants',
    loadChildren: () =>
      import('./six-en-article/six-en-article.module').then(
        (m) => m.SixEnArticleModule
      ),
  },
];

@NgModule({
  declarations: [EnTradingHomepageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EnTradingModule {}
