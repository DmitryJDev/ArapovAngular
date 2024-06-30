import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkNineComponent } from './home-uk-nine/home-uk-nine.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkNineComponent }];

@NgModule({
  declarations: [HomeUkNineComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NineUkArtickleModule {}
