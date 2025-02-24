import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/home/home.routes').then(m => m.HomeRoutes)
  },
  {
    path: 'about',
    loadChildren: () => import('@pages/about/about.routes').then(m => m.AboutRoutes)
  },
  {
    path: '**', pathMatch: 'full',
    loadChildren: () => import('@pages/error/error.routes').then(m => m.ErrorRoutes)
  },
]
