import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuNineComponent } from './home-ru-nine/home-ru-nine.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuNineComponent }];

@NgModule({
  declarations: [HomeRuNineComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NineRuArticleModule {}
