import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteLine } from './carry/route-line/route-line'; // Шлях до вашого компонента

export const routes: Routes = [
  { path: 'route-line', component: RouteLine },
  // інші маршрути
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
