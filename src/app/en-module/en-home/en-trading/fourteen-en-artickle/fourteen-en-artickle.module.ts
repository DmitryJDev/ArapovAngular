import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnFourteenComponent } from './home-en-fourteen/home-en-fourteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnFourteenComponent }];

@NgModule({
  declarations: [HomeEnFourteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourteenEnArtickleModule {}
