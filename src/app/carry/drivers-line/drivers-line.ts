import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DriversLineDialogComponent } from './drivers-line-dialog.component';
import { MatIconModule } from '@angular/material/icon';
export interface DriversTable {
  name: string;
  position: number;
  experience: number;
}

const ELEMENT_DATA: DriversTable[] = [
  { position: 1, name: 'Флоренс Пью', experience: 2 },
  { position: 2, name: 'Кілліан Мерфі', experience: 10 },
  { position: 3, name: 'Генрі Кевіл', experience: 3 },
];

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
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DriversLineDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource = [
          ...this.dataSource,
          {
            position: this.dataSource.length + 1,
            name: `${result.lastName} ${result.firstName} ${result.middleName}`,
            experience: result.experience,
          },
        ];
      }
    });
  }
  displayedColumns: string[] = ['position', 'name', 'experience'];
  dataSource = ELEMENT_DATA;

  lastName = '';
  firstName = '';
  middleName = '';
  experience: number | null = null;

  onNoClick() {
    // Дія при скасуванні (можна закрити діалог або очистити поля)
    this.lastName = '';
    this.firstName = '';
    this.middleName = '';
    this.experience = null;
  }
}
