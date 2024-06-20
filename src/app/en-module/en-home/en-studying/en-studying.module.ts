import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnStudyingHomeComponent } from './en-studying-home/en-studying-home.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: EnStudyingHomeComponent }];

@NgModule({
  declarations: [EnStudyingHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EnStudyingModule {}
