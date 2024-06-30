import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnEightComponent } from './home-en-eight/home-en-eight.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnEightComponent }];
@NgModule({
  declarations: [HomeEnEightComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EightEnArticleModule {}
