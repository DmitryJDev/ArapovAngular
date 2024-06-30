import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnFifteenComponent } from './home-en-fifteen/home-en-fifteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnFifteenComponent }];

@NgModule({
  declarations: [HomeEnFifteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FifteenEnArtickleModule {}
