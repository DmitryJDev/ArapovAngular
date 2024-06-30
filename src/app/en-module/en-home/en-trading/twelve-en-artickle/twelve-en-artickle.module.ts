import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnTwelveComponent } from './home-en-twelve/home-en-twelve.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnTwelveComponent }];

@NgModule({
  declarations: [HomeEnTwelveComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwelveEnArtickleModule {}
