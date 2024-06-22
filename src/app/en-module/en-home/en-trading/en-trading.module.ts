import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnTradingHomepageComponent } from './en-trading-homepage/en-trading-homepage.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { EnTradingArticleOneComponent } from './en-trading-article-one/en-trading-article-one.component';

const routes: Routes = [
  { path: '', component: EnTradingHomepageComponent },
  { path: 'adviceForBeginners', component: EnTradingArticleOneComponent },
];

@NgModule({
  declarations: [EnTradingHomepageComponent, EnTradingArticleOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EnTradingModule {}
