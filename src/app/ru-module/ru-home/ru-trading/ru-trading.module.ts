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
  {
    path: 'currenciesAndQuotes',
    loadChildren: () =>
      import('./eight-ru-article/eight-ru-article.module').then(
        (m) => m.EightRuArticleModule
      ),
  },
  {
    path: 'formationExchange',
    loadChildren: () =>
      import('./nine-ru-article/nine-ru-article.module').then(
        (m) => m.NineRuArticleModule
      ),
  },

  {
    path: 'currencyPosition',
    loadChildren: () =>
      import('./ten-ru-artickle/ten-ru-artickle.module').then(
        (m) => m.TenRuArtickleModule
      ),
  },
  {
    path: 'forexValueDate',
    loadChildren: () =>
      import('./eleven-ru-artickle/eleven-ru-artickle.module').then(
        (m) => m.ElevenRuArtickleModule
      ),
  },
  {
    path: 'howToMakeMoney',
    loadChildren: () =>
      import('./twelve-ru-artickle/twelve-ru-artickle.module').then(
        (m) => m.TwelveRuArtickleModule
      ),
  },
  {
    path: 'riskCurrencyExchange',
    loadChildren: () =>
      import('./thirteen-ru-artickle/thirteen-ru-artickle.module').then(
        (m) => m.ThirteenRuArtickleModule
      ),
  },
  {
    path: 'forexLeverageRisk',
    loadChildren: () =>
      import('./fourteen-ru-artickle/fourteen-ru-artickle.module').then(
        (m) => m.FourteenRuArtickleModule
      ),
  },
  {
    path: 'majorBankFrs',
    loadChildren: () =>
      import('./fifteen-ru-artickle/fifteen-ru-artickle.module').then(
        (m) => m.FifteenRuArtickleModule
      ),
  },
  {
    path: 'behavioralRisks',
    loadChildren: () =>
      import('./sixteen-ru-artickle/sixteen-ru-artickle.module').then(
        (m) => m.SixteenRuArtickleModule
      ),
  },
  {
    path: 'f17',
    loadChildren: () =>
      import('./seventeen-ru-artickle/seventeen-ru-artickle.module').then(
        (m) => m.SeventeenRuArtickleModule
      ),
  },
  {
    path: 'f18',
    loadChildren: () =>
      import('./eighteen-ru-artickle/eighteen-ru-artickle.module').then(
        (m) => m.EighteenRuArtickleModule
      ),
  },
  {
    path: 'f19',
    loadChildren: () =>
      import('./nineteen-ru-artickle/nineteen-ru-artickle.module').then(
        (m) => m.NineteenRuArtickleModule
      ),
  },
  {
    path: 'f20',
    loadChildren: () =>
      import('./twenty-ru-artickle/twenty-ru-artickle.module').then(
        (m) => m.TwentyRuArtickleModule
      ),
  },
];

@NgModule({
  declarations: [RuTradingHomepageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RuTradingModule {}
