import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UkTradingHomepageComponent } from './uk-trading-homepage/uk-trading-homepage.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UkTradingHomepageComponent },

  {
    path: 'adviceForBeginners',
    loadChildren: () =>
      import('./one-article/one-article.module').then(
        (m) => m.OneArticleModule
      ),
  },

  {
    path: 'marketBasics',
    loadChildren: () =>
      import('./two-article/two-article.module').then(
        (m) => m.TwoArticleModule
      ),
  },
  {
    path: 'exchange',
    loadChildren: () =>
      import('./three-article/three-article.module').then(
        (m) => m.ThreeArticleModule
      ),
  },
  {
    path: 'exchangeMarket',
    loadChildren: () =>
      import('./four-article/four-article.module').then(
        (m) => m.FourArticleModule
      ),
  },
  {
    path: 'derivatives',
    loadChildren: () =>
      import('./five-article/five-article.module').then(
        (m) => m.FiveArticleModule
      ),
  },
  {
    path: 'exchangeParticipants',
    loadChildren: () =>
      import('./six-uk-artikle/six-uk-artikle.module').then(
        (m) => m.SixUkArtikleModule
      ),
  },
  {
    path: 'forexMarket',
    loadChildren: () =>
      import('./seven-uk-article/seven-uk-article.module').then(
        (m) => m.SevenUkArticleModule
      ),
  },
  {
    path: 'currenciesAndQuotes',
    loadChildren: () =>
      import('./eight-uk-article/eight-uk-article.module').then(
        (m) => m.EightUkArticleModule
      ),
  },
  {
    path: 'formationExchange',
    loadChildren: () =>
      import('./nine-uk-artickle/nine-uk-artickle.module').then(
        (m) => m.NineUkArtickleModule
      ),
  },
  {
    path: 'currencyPosition',
    loadChildren: () =>
      import('./ten-uk-artickle/ten-uk-artickle.module').then(
        (m) => m.TenUkArtickleModule
      ),
  },
  {
    path: 'forexValueDate',
    loadChildren: () =>
      import('./eleven-uk-artickle/eleven-uk-artickle.module').then(
        (m) => m.ElevenUkArtickleModule
      ),
  },
  {
    path: 'howToMakeMoney',
    loadChildren: () =>
      import('./twelve-uk-artickle/twelve-uk-artickle.module').then(
        (m) => m.TwelveUkArtickleModule
      ),
  },
  {
    path: 'riskCurrencyExchange',
    loadChildren: () =>
      import('./thirteen-uk-artickle/thirteen-uk-artickle.module').then(
        (m) => m.ThirteenUkArtickleModule
      ),
  },
  {
    path: 'forexLeverageRisk',
    loadChildren: () =>
      import('./fourteen-uk-artickle/fourteen-uk-artickle.module').then(
        (m) => m.FourteenUkArtickleModule
      ),
  },
  {
    path: 'majorBankFrs',
    loadChildren: () =>
      import('./fifteen-uk-artickle/fifteen-uk-artickle.module').then(
        (m) => m.FifteenUkArtickleModule
      ),
  },
  {
    path: 'behavioralRisks',
    loadChildren: () =>
      import('./sixteen-uk-artickle/sixteen-uk-artickle.module').then(
        (m) => m.SixteenUkArtickleModule
      ),
  },
  {
    path: 'f17',
    loadChildren: () =>
      import('./seventeen-uk-artickle/seventeen-uk-artickle.module').then(
        (m) => m.SeventeenUkArtickleModule
      ),
  },
  {
    path: 'f18',
    loadChildren: () =>
      import('./eighteen-uk-artickle/eighteen-uk-artickle.module').then(
        (m) => m.EighteenUkArtickleModule
      ),
  },
  {
    path: 'f19',
    loadChildren: () =>
      import('./nineteen-uk-artickle/nineteen-uk-artickle.module').then(
        (m) => m.NineteenUkArtickleModule
      ),
  },
  {
    path: 'f20',
    loadChildren: () =>
      import('./twenty-uk-artickle/twenty-uk-artickle.module').then(
        (m) => m.TwentyUkArtickleModule
      ),
  },
];

@NgModule({
  declarations: [UkTradingHomepageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UkTradingModule {}
