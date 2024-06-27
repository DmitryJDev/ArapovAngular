import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTwoEnComponent } from './home-two-en/home-two-en.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeTwoEnComponent }];

@NgModule({
  declarations: [HomeTwoEnComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwoEnArticleModule {}
