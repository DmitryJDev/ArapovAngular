import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeUkFiveComponent } from './home-uk-five/home-uk-five.component';

const routes: Routes = [{ path: '', component: HomeUkFiveComponent }];

@NgModule({
  declarations: [HomeUkFiveComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FiveArticleModule {}
