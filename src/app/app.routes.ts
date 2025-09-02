import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteLine } from './carry/route-line/route-line';
import { DriversLine } from './carry/drivers-line/drivers-line';
import { WorkLine } from './carry/work-line/work-line';
import { LoginComponent } from './auth/login.components';

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
  { path: '', redirectTo: '/work-line', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
