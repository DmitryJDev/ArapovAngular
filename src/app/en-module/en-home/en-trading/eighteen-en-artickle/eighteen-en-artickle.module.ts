import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnEighteenComponent } from './home-en-eighteen/home-en-eighteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnEighteenComponent }];
@NgModule({
  declarations: [HomeEnEighteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EighteenEnArtickleModule {}
