import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnSixteenComponent } from './home-en-sixteen/home-en-sixteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnSixteenComponent }];
@NgModule({
  declarations: [HomeEnSixteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SixteenEnArtickleModule {}
