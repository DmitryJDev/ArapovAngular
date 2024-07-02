import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuEighteenComponent } from './home-ru-eighteen/home-ru-eighteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuEighteenComponent }];
@NgModule({
  declarations: [HomeRuEighteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EighteenRuArtickleModule {}
