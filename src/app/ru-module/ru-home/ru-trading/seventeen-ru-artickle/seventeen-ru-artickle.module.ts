import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuSeventeenComponent } from './home-ru-seventeen/home-ru-seventeen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuSeventeenComponent }];
@NgModule({
  declarations: [HomeRuSeventeenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SeventeenRuArtickleModule {}
