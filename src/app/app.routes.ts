import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteLine } from './carry/route-line/route-line';
import { HomePage } from './carry/home-page/home-pg';
import { DriversLine } from './carry/drivers-line/drivers-line';
import { WorkLine } from './carry/work-line/work-line';
export const routes: Routes = [
  {
    path: 'route-line',
    component: RouteLine,
  },
  {
    path: 'drivers-line',
    component: DriversLine,
  },
  {
    path: 'work-line',
    component: WorkLine,
  },
  { path: '', component: HomePage },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
