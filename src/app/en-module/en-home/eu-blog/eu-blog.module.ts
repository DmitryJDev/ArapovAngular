import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnBlogHomepageComponent } from './en-blog-homepage/en-blog-homepage.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: EnBlogHomepageComponent }];

@NgModule({
  declarations: [EnBlogHomepageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EuBlogModule {}
