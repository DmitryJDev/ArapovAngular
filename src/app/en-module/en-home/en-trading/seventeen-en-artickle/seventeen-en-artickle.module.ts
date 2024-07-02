import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnSeventeenComponent } from './home-en-seventeen/home-en-seventeen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnSeventeenComponent }];
@NgModule({
  declarations: [HomeEnSeventeenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SeventeenEnArtickleModule {}
