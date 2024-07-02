import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkSixteenComponent } from './home-uk-sixteen/home-uk-sixteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkSixteenComponent }];
@NgModule({
  declarations: [HomeUkSixteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SixteenUkArtickleModule {}
