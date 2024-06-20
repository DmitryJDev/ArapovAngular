import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnHomeComponent } from './en-home/en-home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './en-home/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: EnHomeComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      {
        path: 'studying',
        loadChildren: () =>
          import('./en-home/en-studying/en-studying.module').then(
            (m) => m.EnStudyingModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [EnHomeComponent, HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EnModuleModule {}
