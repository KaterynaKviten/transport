import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RouteLineDialogComponent } from './route-line-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

export interface RoutsTable {
  name: string;
  distance: number;
  days: number;
  payment: number;
  position: number;
}

@Component({
  selector: 'app-route-line',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, FormsModule, MatIconModule],
  templateUrl: './route-line.html',
  styleUrl: './route-line.css',
})
export class RouteLine {
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RouteLineDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.http.post('/api/routes/create', result).subscribe(() => {
          this.loadRouts();
        });
      }
    });
  }
  loadRouts() {
    this.http.get<any[]>('/api/routes/').subscribe((routs) => {
      this.dataSource = routs.map((r, i) => ({
        position: i + 1,
        name: r.name,
        distance: r.distance,
        days: r.days,
        payment: r.payment,
      }));
    });
  }
  displayedColumns: string[] = ['position', 'name', 'distance', 'days', 'payment'];
  dataSource: RoutsTable[] = [];

  name = '';
  distance: number | null = null;
  days: number | null = null;
  payment: number | null = null;

  ngOnInit() {
    this.loadRouts();
  }
}
