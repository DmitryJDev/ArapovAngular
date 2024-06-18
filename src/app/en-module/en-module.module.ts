import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnHomeComponent } from './en-home/en-home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: EnHomeComponent }];

@NgModule({
  declarations: [EnHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EnModuleModule {}
