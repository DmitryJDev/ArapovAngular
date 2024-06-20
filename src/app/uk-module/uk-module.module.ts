import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UkHomeComponent } from './uk-home/uk-home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UkHomePageComponent } from './uk-home/uk-home-page/uk-home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: UkHomeComponent,
    children: [
      { path: 'home', component: UkHomePageComponent },
      {
        path: 'studying',
        loadChildren: () =>
          import('./uk-home/uk-studying/uk-studying.module').then(
            (m) => m.UkStudyingModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [UkHomeComponent, UkHomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UkModuleModule {}
