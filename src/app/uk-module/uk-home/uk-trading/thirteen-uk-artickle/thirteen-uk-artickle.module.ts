import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkThirteenComponent } from './home-uk-thirteen/home-uk-thirteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkThirteenComponent }];

@NgModule({
  declarations: [HomeUkThirteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ThirteenUkArtickleModule {}
