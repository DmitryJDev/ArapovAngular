import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnTenComponent } from './home-en-ten/home-en-ten.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnTenComponent }];

@NgModule({
  declarations: [HomeEnTenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TenEnArtickleModule {}
