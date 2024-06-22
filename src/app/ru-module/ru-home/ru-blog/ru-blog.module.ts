import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuBlogHomepageComponent } from './ru-blog-homepage/ru-blog-homepage.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: RuBlogHomepageComponent }];

@NgModule({
  declarations: [RuBlogHomepageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RuBlogModule {}
