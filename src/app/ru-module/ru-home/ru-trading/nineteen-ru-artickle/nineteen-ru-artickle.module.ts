import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuNineteenComponent } from './home-ru-nineteen/home-ru-nineteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuNineteenComponent }];
@NgModule({
  declarations: [HomeRuNineteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NineteenRuArtickleModule {}
