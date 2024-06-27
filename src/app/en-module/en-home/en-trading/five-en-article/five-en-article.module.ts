import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFiveEnComponent } from './home-five-en/home-five-en.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeFiveEnComponent }];

@NgModule({
  declarations: [HomeFiveEnComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FiveEnArticleModule {}
