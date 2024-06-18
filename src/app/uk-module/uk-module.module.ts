import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UkHomeComponent } from './uk-home/uk-home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: UkHomeComponent }];

@NgModule({
  declarations: [UkHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UkModuleModule {}
