import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuTenComponent } from './home-ru-ten/home-ru-ten.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuTenComponent }];

@NgModule({
  declarations: [HomeRuTenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TenRuArtickleModule {}
