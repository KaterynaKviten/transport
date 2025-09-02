import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
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
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
