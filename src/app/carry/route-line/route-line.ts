import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
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
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './route-line.html',
  styleUrls: ['./route-line.css'],
})
export class RouteLine {
  displayedColumns: string[] = ['position', 'name', 'distance', 'days', 'payment'];
  dataSource = ELEMENT_DATA;

  routeName = '';
  distance: number | null = null;
  days: number | null = null;
  payment: number | null = null;

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

      // Очистка полів форми
      this.routeName = '';
      this.distance = null;
      this.days = null;
      this.payment = null;
    }
  }
}
