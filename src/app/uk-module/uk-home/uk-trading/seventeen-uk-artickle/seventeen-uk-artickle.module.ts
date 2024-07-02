import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkSeventeenComponent } from './home-uk-seventeen/home-uk-seventeen.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkSeventeenComponent }];
@NgModule({
  declarations: [HomeUkSeventeenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SeventeenUkArtickleModule {}
