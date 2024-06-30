import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkTenComponent } from './home-uk-ten/home-uk-ten.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkTenComponent }];

@NgModule({
  declarations: [HomeUkTenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TenUkArtickleModule {}
