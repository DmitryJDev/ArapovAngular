import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeUkThreeComponent } from './home-uk-three/home-uk-three.component';

const routes: Routes = [{ path: '', component: HomeUkThreeComponent }];

@NgModule({
  declarations: [HomeUkThreeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ThreeArticleModule {}
