import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuElevenComponent } from './home-ru-eleven/home-ru-eleven.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuElevenComponent }];

@NgModule({
  declarations: [HomeRuElevenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ElevenRuArtickleModule {}
