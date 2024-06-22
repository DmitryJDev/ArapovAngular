import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuTradingHomepageComponent } from './ru-trading-homepage/ru-trading-homepage.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { RuTradingArticleOneComponent } from './ru-trading-article-one/ru-trading-article-one.component';

const routes: Routes = [
  { path: '', component: RuTradingHomepageComponent },
  { path: 'adviceForBeginners', component: RuTradingArticleOneComponent },
];

@NgModule({
  declarations: [RuTradingHomepageComponent, RuTradingArticleOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RuTradingModule {}
