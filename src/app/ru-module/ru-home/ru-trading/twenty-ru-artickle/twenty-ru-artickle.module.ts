import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuTwentyComponent } from './home-ru-twenty/home-ru-twenty.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuTwentyComponent }];
@NgModule({
  declarations: [HomeRuTwentyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwentyRuArtickleModule {}
