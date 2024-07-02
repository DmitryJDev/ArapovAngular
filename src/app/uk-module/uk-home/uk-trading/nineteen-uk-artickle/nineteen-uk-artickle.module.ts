import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkNineteenComponent } from './home-uk-nineteen/home-uk-nineteen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkNineteenComponent }];
@NgModule({
  declarations: [HomeUkNineteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NineteenUkArtickleModule {}
