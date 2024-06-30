import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkFifteenComponent } from './home-uk-fifteen/home-uk-fifteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkFifteenComponent }];

@NgModule({
  declarations: [HomeUkFifteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FifteenUkArtickleModule {}
