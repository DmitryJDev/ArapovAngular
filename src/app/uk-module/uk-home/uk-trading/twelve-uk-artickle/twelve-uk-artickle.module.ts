import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkTwelveComponent } from './home-uk-twelve/home-uk-twelve.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkTwelveComponent }];

@NgModule({
  declarations: [HomeUkTwelveComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwelveUkArtickleModule {}
