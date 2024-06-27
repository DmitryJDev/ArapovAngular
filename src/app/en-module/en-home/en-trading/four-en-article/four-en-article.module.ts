import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFourEnComponent } from './home-four-en/home-four-en.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeFourEnComponent }];

@NgModule({
  declarations: [HomeFourEnComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourEnArticleModule {}
