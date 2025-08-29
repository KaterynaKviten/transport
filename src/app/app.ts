import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, range, Subscriber, map, Observable, BehaviorSubject } from 'rxjs';
import { RouteLine } from './carry/route-line/route-line';
import { ComletedLine } from './carry/comleted-line/comleted-line';
import { DriversLine } from './carry/drivers-line/drivers-line';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouteLine,
    ComletedLine,
    DriversLine,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('prj-angular');
  constructor() {
    const evenNumb$ = new Observable((observer) => {
      for (let i = 2; i <= 10; i += 2) {
        observer.next(i);
      }
      observer.complete();
    });

    evenNumb$.subscribe((value) => console.log(value));
  }
}
