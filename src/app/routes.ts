import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'news-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'news-dashboard',
        loadChildren: () =>
          import('./pages/news-dashboard/news-dashboard.module').then(
            (m) => m.NewsDashboardModule
          ),
      },
      {
        path: '**',
        redirectTo: 'news-dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'news-dashboard',
    pathMatch: 'full',
  },
];
