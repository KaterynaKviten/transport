import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteLine } from './carry/route-line/route-line';
import { HomePage } from './carry/home-page/home-pg';
export const routes: Routes = [
  {
    path: 'route-line',
    component: RouteLine,
  },
  { path: '', component: HomePage },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
