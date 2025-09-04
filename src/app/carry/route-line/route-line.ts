import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RouteLineDialogComponent } from './route-line-dialog.component';
import { MatIconModule } from '@angular/material/icon';

export interface RoutsTable {
  name: string;
  distance: number;
  days: number;
  payment: number;
  position: number;
}
const ELEMENT_DATA: RoutsTable[] = [
  { position: 1, name: 'Львів', distance: 500, days: 1, payment: 1000 },
  { position: 2, name: 'Варшава', distance: 1200, days: 2, payment: 2500 },
  { position: 3, name: 'Трипілля', distance: 50, days: 1, payment: 500 },
];

@Component({
  selector: 'app-route-line',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouteLineDialogComponent,
    MatIconModule,
  ],
  templateUrl: './route-line.html',
  styleUrl: './route-line.css',
})
export class RouteLine {
  displayedColumns: string[] = ['position', 'name', 'distance', 'days', 'payment'];
  dataSource = ELEMENT_DATA;

  routeName = '';
  distance: number | null = null;
  days: number | null = null;
  payment: number | null = null;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RouteLineDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource = [
          ...this.dataSource,
          {
            position: this.dataSource.length + 1,
            name: result.routeName,
            distance: result.distance,
            days: result.days,
            payment: result.payment,
          },
        ];
      }
    });
  }

  addRoute() {
    if (this.routeName && this.distance !== null && this.days !== null && this.payment !== null) {
      this.dataSource = [
        ...this.dataSource,
        {
          position: this.dataSource.length + 1,
          name: this.routeName,
          distance: this.distance,
          days: this.days,
          payment: this.payment,
        },
      ];

      this.routeName = '';
      this.distance = null;
      this.days = null;
      this.payment = null;
    }
  }
}
