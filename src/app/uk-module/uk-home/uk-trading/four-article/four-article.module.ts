import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeUkFourComponent } from './home-uk-four/home-uk-four.component';

const routes: Routes = [{ path: '', component: HomeUkFourComponent }];

@NgModule({
  declarations: [HomeUkFourComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourArticleModule {}
