import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuTwelveComponent } from './home-ru-twelve/home-ru-twelve.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuTwelveComponent }];

@NgModule({
  declarations: [HomeRuTwelveComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwelveRuArtickleModule {}
