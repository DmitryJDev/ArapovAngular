import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnNineComponent } from './home-en-nine/home-en-nine.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnNineComponent }];

@NgModule({
  declarations: [HomeEnNineComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NineEnArtickleModule {}
