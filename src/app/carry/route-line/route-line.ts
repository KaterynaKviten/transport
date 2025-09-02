import { Component, OnInit } from '@angular/core';
import { ICarry } from '../carry.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-route-line',
  templateUrl: './route-line.html',
  styleUrls: ['./route-line.css'],
})
export class RouteLine implements OnInit {
  public routes: ICarry[] = [];
  public ngOnInit(): void {
    this.routes.push({ title: 'Route 1', description: 'Description 1' });
  }
}

export interface Route {
  name: string;
  description: string;
}

const ROUTES: Route[] = [
  { name: 'Маршрут 1', description: 'Опис 1' },
  { name: 'Маршрут 2', description: 'Опис 2' },
];

// @Component({
//   selector: 'app-table-example',
//   standalone: true,
//   imports: [MatTableModule],
//   templateUrl: './table-example.html',
// })
export class TableExampleComponent {
  displayedColumns: string[] = ['name', 'description'];
  dataSource = ROUTES;
}
