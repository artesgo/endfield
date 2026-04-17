import { Routes } from '@angular/router';
import { Essence } from '../essence/essence';
import { Ui } from './ui';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'essence',
    pathMatch: 'full',
  },
  {
    path: 'ui',
    component: Ui,
  },
  {
    path: 'essence',
    component: Essence,
  },
];
