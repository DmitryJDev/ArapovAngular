import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuFourComponent } from './home-ru-four/home-ru-four.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuFourComponent }];

@NgModule({
  declarations: [HomeRuFourComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourRuArticleModule {}
