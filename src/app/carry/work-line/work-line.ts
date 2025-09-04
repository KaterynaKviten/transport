import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { WorkLineDialogComponents } from './work-line-dialog.components';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export interface WorkTable {
  position: number;
  nameDriver: string;
  nameRoute: string;
  departuresStart: Date;
  departuresEnd: Date;
  bonus: number;
}
const ELEMENT_DATA: WorkTable[] = [
  {
    position: 1,
    nameDriver: "Флоренс П'ю",
    nameRoute: 'Трипілля',
    departuresStart: new Date('2025-08-20'),
    departuresEnd: new Date('2025-08-21'),
    bonus: 500,
  },
  {
    position: 2,
    nameDriver: 'Кілліан Мерфі',
    nameRoute: 'Варшава',
    departuresStart: new Date('2025-09-20'),
    departuresEnd: new Date('2025-09-21'),
    bonus: 0,
  },
  {
    position: 3,
    nameDriver: 'Генрі Кевіл',
    nameRoute: 'Львів',
    departuresStart: new Date('2025-08-25'),
    departuresEnd: new Date('2025-08-26'),
    bonus: 100,
  },
];

@Component({
  selector: 'app-work-line',
  standalone: true,
  imports: [MatTableModule, DatePipe, WorkLineDialogComponents, MatIconModule],
  templateUrl: './work-line.html',
  styleUrl: './work-line.css',
})
export class WorkLine {
  constructor(private dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(WorkLineDialogComponents, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource = [
          ...this.dataSource,
          {
            position: this.dataSource.length + 1,
            nameDriver: result.nameDriver,
            nameRoute: result.nameRoute,
            departuresStart: result.departuresStart,
            departuresEnd: result.departuresEnd,
            bonus: result.bonus,
          },
        ];
      }
    });
  }
  displayedColumns: string[] = [
    'position',
    'nameDriver',
    'nameRoute',
    'departuresStart',
    'departuresEnd',
    'bonus',
  ];
  dataSource = ELEMENT_DATA;
}
