import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UkTradingHomepageComponent } from './uk-trading-homepage/uk-trading-homepage.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { UkTraidingArticleOneComponent } from './uk-traiding-article-one/uk-traiding-article-one.component';

const routes: Routes = [
  { path: '', component: UkTradingHomepageComponent },
  { path: 'adviceForBeginners', component: UkTraidingArticleOneComponent },
];

@NgModule({
  declarations: [UkTradingHomepageComponent, UkTraidingArticleOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UkTradingModule {}
