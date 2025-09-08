import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DriversLineDialogComponent } from './drivers-line-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

export interface DriversTable {
  name: string;
  position: number;
  experience: number;
}
@Component({
  selector: 'app-drivers-line',
  imports: [
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    DriversLineDialogComponent,
    MatIconModule,
  ],

  templateUrl: './drivers-line.html',
  styleUrl: './drivers-line.css',
})
export class DriversLine {
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DriversLineDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.http.post('/api/driver/create', result).subscribe(() => {
          this.loadDrivers();
        });
      }
    });
  }
  loadDrivers() {
    this.http.get<any[]>('/api/drivers').subscribe((drivers) => {
      this.dataSource = drivers.map((d, i) => ({
        position: i + 1,
        name: `${d.lastName} ${d.firstName} ${d.middleName}`,
        experience: d.experience ?? 0,
      }));
    });
  }
  displayedColumns: string[] = ['position', 'name', 'experience'];
  dataSource: DriversTable[] = [];

  lastName = '';
  firstName = '';
  middleName = '';
  experience: number | null = null;

  onNoClick() {
    this.lastName = '';
    this.firstName = '';
    this.middleName = '';
    this.experience = null;
  }
  ngOnInit() {
    this.loadDrivers();
  }
}
