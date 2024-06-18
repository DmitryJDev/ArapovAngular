import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuHomeComponent } from './ru-home/ru-home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: RuHomeComponent }];

@NgModule({
  declarations: [RuHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RuModuleModule {}
