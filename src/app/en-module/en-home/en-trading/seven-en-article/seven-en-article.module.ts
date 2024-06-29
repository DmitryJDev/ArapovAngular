import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnSevenComponent } from './home-en-seven/home-en-seven.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeEnSevenComponent,
  },
];

@NgModule({
  declarations: [HomeEnSevenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SevenEnArticleModule {}
