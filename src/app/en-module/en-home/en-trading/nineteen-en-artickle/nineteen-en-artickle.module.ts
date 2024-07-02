import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnNineteenComponent } from './home-en-nineteen/home-en-nineteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnNineteenComponent }];
@NgModule({
  declarations: [HomeEnNineteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NineteenEnArtickleModule {}
