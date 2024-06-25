import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuTwoComponent } from './home-ru-two/home-ru-two.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuTwoComponent }];

@NgModule({
  declarations: [HomeRuTwoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwoRuArticleModule {}
