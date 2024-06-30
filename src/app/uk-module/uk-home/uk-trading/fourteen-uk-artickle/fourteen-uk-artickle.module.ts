import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkFourteenComponent } from './home-uk-fourteen/home-uk-fourteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkFourteenComponent }];

@NgModule({
  declarations: [HomeUkFourteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourteenUkArtickleModule {}
