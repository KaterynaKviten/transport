import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteLine } from './carry/route-line/route-line';
import { DriversLine } from './carry/drivers-line/drivers-line';
import { WorkLine } from './carry/work-line/work-line';
import { LoginComponent } from './auth/login.components';
import { RegisterComponent } from './auth/registr.components';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'route-line',
    component: RouteLine,
    canActivate: [authGuard],
  },
  {
    path: 'drivers-line',
    component: DriversLine,
    canActivate: [authGuard],
  },
  {
    path: 'work-line',
    component: WorkLine,
    canActivate: [authGuard],
  },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
