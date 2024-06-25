import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOneEnComponent } from './home-one-en/home-one-en.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeOneEnComponent }];

@NgModule({
  declarations: [HomeOneEnComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OneEnArticleModule {}
