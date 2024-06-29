import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuSevenComponent } from './home-ru-seven/home-ru-seven.component';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeRuSevenComponent }];

@NgModule({
  declarations: [HomeRuSevenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SevenRuArticleModule {}
