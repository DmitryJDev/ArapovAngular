import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuFifteenComponent } from './home-ru-fifteen/home-ru-fifteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuFifteenComponent }];

@NgModule({
  declarations: [HomeRuFifteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FifteenRuArtickleModule {}
