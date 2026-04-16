import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'ui',
    pathMatch: 'full',
  },
  {
    path: 'ui',
    loadChildren: () => import('artesgo-efui').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'ui',
  },
];
