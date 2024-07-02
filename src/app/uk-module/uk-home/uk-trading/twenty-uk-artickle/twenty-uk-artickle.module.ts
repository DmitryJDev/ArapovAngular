import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkTwentyComponent } from './home-uk-twenty/home-uk-twenty.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkTwentyComponent }];
@NgModule({
  declarations: [HomeUkTwentyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwentyUkArtickleModule {}
