import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { WorkLineDialogComponents } from './work-line-dialog.components';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

export interface WorkTable {
  position: number;
  name: string;
  drivers: string[];
  startDate: string;
  endDate: string;
  payment: number;
  experience: number;
  bonus: number;
}

@Component({
  selector: 'app-work-line',
  standalone: true,
  imports: [MatTableModule, DatePipe, WorkLineDialogComponents, MatIconModule],
  templateUrl: './work-line.html',
  styleUrl: './work-line.css',
})
export class WorkLine {
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(WorkLineDialogComponents, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.http.post('/api/work/create', result).subscribe(() => {
          this.loadWorks();
        });
      }
    });
  }
  loadWorks() {
    this.http.get<any[]>('/api/work').subscribe((work) => {
      this.dataSource = work.map((w, i) => ({
        position: i + 1,
        name: w.name,
        drivers: Array.isArray(w.drivers) ? w.drivers : [],
        startDate: w.startDate,
        endDate: w.endDate,
        payment: w.payment,
        experience: w.experience,
        bonus: w.bonus,
      }));
    });
  }
  displayedColumns: string[] = [
    'position',
    'name',
    'drivers',
    'startDate',
    'endDate',
    'payment',
    'experience',
    'bonus',
  ];
  dataSource: WorkTable[] = [];
  name = '';
  drivers: any[] = [];
  startDate: string = '';
  endDate: string = '';
  payment: number | null = null;
  experience: number | null = null;
  bonus: number | null = null;

  ngOnInit() {
    this.loadWorks();
  }
}
