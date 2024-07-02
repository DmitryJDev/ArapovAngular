import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkEighteenComponent } from './home-uk-eighteen/home-uk-eighteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkEighteenComponent }];
@NgModule({
  declarations: [HomeUkEighteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EighteenUkArtickleModule {}
