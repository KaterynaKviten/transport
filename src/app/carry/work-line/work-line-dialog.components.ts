import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-line-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
  ],
  styleUrls: ['../carry.css'],
  template: `
    <div class="dialog-header">
      <h2 mat-dialog-title>Додати перевезення</h2>
      <button mat-icon-button (click)="onNoClick()" class="close-btn">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <form (ngSubmit)="onSave()">
      <mat-dialog-content>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Маршрут</mat-label>
          <mat-select name="selectedRoute" [(ngModel)]="selectedRoute">
            <mat-option *ngFor="let route of routes" [value]="route.name">
              {{ route.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Водій</mat-label>
          <mat-select name="selectedDriver" [(ngModel)]="selectedDriver">
            <mat-option
              *ngFor="let driver of drivers"
              [value]="driver.lastName + ' ' + driver.firstName + ' ' + driver.middleName"
            >
              {{ driver.lastName }} {{ driver.firstName }} {{ driver.middleName }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Дата відправлення</mat-label>
          <input matInput type="date" name="startDate" [(ngModel)]="startDate" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Дата прибуття</mat-label>
          <input matInput type="date" name="endDate" [(ngModel)]="endDate" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Оплата (грн)</mat-label>
          <input matInput type="number" name="payment" [(ngModel)]="payment" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Премія (грн)</mat-label>
          <input matInput type="number" name="bonus" [(ngModel)]="bonus" />
        </mat-form-field>

        <button
          mat-button
          [mat-dialog-close]="{
            name: selectedRoute,
            driver: selectedDriver,
            startDate: startDate,
            endDate: endDate,
            payment: payment,
            bonus: bonus
          }"
          class="save-btn"
        >
          Зберегти
        </button>
      </mat-dialog-content>
    </form>
  `,
})
export class WorkLineDialogComponents {
  name = '';
  driver = '';
  startDate: string = '';
  endDate: string = '';
  payment: number | null = null;
  bonus: number | null = null;

  selectedRoute: string = '';
  selectedDriver: string = '';

  routes: any[] = [];
  drivers: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<WorkLineDialogComponents>,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get<any[]>('/api/routes').subscribe((data) => {
      this.routes = data;
    });
    this.http.get<any[]>('/api/drivers').subscribe((data) => {
      this.drivers = data;
    });
  }
  onSave(): void {
    this.dialogRef.close({
      name: this.selectedRoute,
      driver: this.selectedDriver,
      startDate: this.startDate,
      endDate: this.endDate,
      payment: this.payment,
      bonus: this.bonus,
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
