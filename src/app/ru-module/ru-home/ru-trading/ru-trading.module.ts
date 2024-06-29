import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuTradingHomepageComponent } from './ru-trading-homepage/ru-trading-homepage.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: RuTradingHomepageComponent },
  // { path: 'adviceForBeginners', component: RuTradingArticleOneComponent },

  {
    path: 'adviceForBeginners',
    loadChildren: () =>
      import('./one-ru-article/one-ru-article.module').then(
        (m) => m.OneRUArticleModule
      ),
  },

  {
    path: 'marketBasics',
    loadChildren: () =>
      import('./two-ru-article/two-ru-article.module').then(
        (m) => m.TwoRuArticleModule
      ),
  },
  {
    path: 'exchange',
    loadChildren: () =>
      import('./three-ru-article/three-ru-article.module').then(
        (m) => m.ThreeRuArticleModule
      ),
  },
  {
    path: 'exchangeMarket',
    loadChildren: () =>
      import('./four-ru-article/four-ru-article.module').then(
        (m) => m.FourRuArticleModule
      ),
  },
  {
    path: 'derivatives',
    loadChildren: () =>
      import('./five-ru-article/five-ru-article.module').then(
        (m) => m.FiveRuArticleModule
      ),
  },
  {
    path: 'exchangeParticipants',
    loadChildren: () =>
      import('./six-ru-article/six-ru-article.module').then(
        (m) => m.SixRuArticleModule
      ),
  },
  {
    path: 'forexMarket',
    loadChildren: () =>
      import('./seven-ru-article/seven-ru-article.module').then(
        (m) => m.SevenRuArticleModule
      ),
  },
];

@NgModule({
  declarations: [RuTradingHomepageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RuTradingModule {}
