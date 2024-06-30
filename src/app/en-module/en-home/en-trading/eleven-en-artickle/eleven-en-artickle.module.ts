import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnElevenComponent } from './home-en-eleven/home-en-eleven.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnElevenComponent }];

@NgModule({
  declarations: [HomeEnElevenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ElevenEnArtickleModule {}
