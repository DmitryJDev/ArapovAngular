import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuOneComponent } from './home-ru-one/home-ru-one.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuOneComponent }];

@NgModule({
  declarations: [HomeRuOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FiveRuArticleModule {}
