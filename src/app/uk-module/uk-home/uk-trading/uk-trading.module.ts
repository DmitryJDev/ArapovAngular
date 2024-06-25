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
    path: 'two',
    loadChildren: () =>
      import('./two-article/two-article.module').then(
        (m) => m.TwoArticleModule
      ),
  },
  {
    path: 'three',
    loadChildren: () =>
      import('./three-article/three-article.module').then(
        (m) => m.ThreeArticleModule
      ),
  },
  {
    path: 'four',
    loadChildren: () =>
      import('./four-article/four-article.module').then(
        (m) => m.FourArticleModule
      ),
  },
];

@NgModule({
  declarations: [UkTradingHomepageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UkTradingModule {}
