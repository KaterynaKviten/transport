import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { filter, range, Subscriber, map, Observable, BehaviorSubject } from 'rxjs';
import { RouteLine } from './carry/route-line/route-line';
import { WorkLine } from './carry/work-line/work-line';
import { DriversLine } from './carry/drivers-line/drivers-line';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { LoginComponent } from './auth/login.components';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouteLine,
    WorkLine,
    DriversLine,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    LoginComponent,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  get userName(): string | null {
    return this.auth.currentUser?.username ?? null;
  }

  isLoggedIn(): boolean {
    return this.auth.isAuthenticated();
  }
}
