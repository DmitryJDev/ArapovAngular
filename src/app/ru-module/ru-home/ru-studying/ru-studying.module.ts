import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuStudyingHomeComponent } from './ru-studying-home/ru-studying-home.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: RuStudyingHomeComponent }];

@NgModule({
  declarations: [RuStudyingHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RuStudyingModule {}
