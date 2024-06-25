import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuComponent } from './home-ru/home-ru.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuComponent }];

@NgModule({
  declarations: [HomeRuComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OneRUArticleModule {}
