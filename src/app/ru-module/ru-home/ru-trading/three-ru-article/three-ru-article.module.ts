import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuThreeComponent } from './home-ru-three/home-ru-three.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuThreeComponent }];

@NgModule({
  declarations: [HomeRuThreeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ThreeRuArticleModule {}
