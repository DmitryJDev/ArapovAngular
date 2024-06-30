import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkElevenComponent } from './home-uk-eleven/home-uk-eleven.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkElevenComponent }];

@NgModule({
  declarations: [HomeUkElevenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ElevenUkArtickleModule {}
