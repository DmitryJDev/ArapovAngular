import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuHomeComponent } from './ru-home/ru-home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RuHomePageComponent } from './ru-home/ru-home-page/ru-home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: RuHomeComponent,
    children: [
      { path: 'home', component: RuHomePageComponent },
      {
        path: 'studying',
        loadChildren: () =>
          import('./ru-home/ru-studying/ru-studying.module').then(
            (m) => m.RuStudyingModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [RuHomeComponent, RuHomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RuModuleModule {}
