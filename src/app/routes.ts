import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'blog',
    component: MainComponent,
    children: [],
  },
];
