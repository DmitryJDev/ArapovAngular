import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeThreeEnComponent } from './home-three-en/home-three-en.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeThreeEnComponent }];

@NgModule({
  declarations: [HomeThreeEnComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ThreeEnArticleModule {}
