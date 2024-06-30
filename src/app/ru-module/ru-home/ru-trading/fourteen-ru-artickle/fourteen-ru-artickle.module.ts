import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuFourteenComponent } from './home-ru-fourteen/home-ru-fourteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuFourteenComponent }];

@NgModule({
  declarations: [HomeRuFourteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourteenRuArtickleModule {}
