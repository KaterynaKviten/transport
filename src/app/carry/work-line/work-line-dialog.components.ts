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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
  MatNativeDateModule,
  NativeDateAdapter,
} from '@angular/material/core';

@Component({
  selector: 'app-route-line-dialog',
  standalone: true,
  imports: [
    MatCheckboxModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
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
          <mat-select [(ngModel)]="selectedDrivers" name="selectedDrivers" multiple>
            <mat-option
              *ngFor="let d of drivers"
              [value]="d.lastName + ' ' + d.firstName + ' ' + d.middleName"
            >
              {{ d.lastName }} {{ d.firstName }} {{ d.middleName }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Дата відправлення</mat-label>
          <input matInput [matDatepicker]="picker1" name="startDate" [(ngModel)]="startDate" />
          <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
          <mat-datepicker #picker1></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Дата прибуття</mat-label>
          <input matInput [matDatepicker]="picker2" name="endDate" [(ngModel)]="endDate" />
          <mat-datepicker-toggle matSuffix [for]="picker2"></mat-datepicker-toggle>
          <mat-datepicker #picker2></mat-datepicker>
        </mat-form-field>

        <mat-checkbox
          [checked]="experience"
          name="experience"
          (change)="experience = $event.checked"
        >
          Врахувати стаж (коефіцієнт 5%)
        </mat-checkbox>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Премія (грн)</mat-label>
          <input matInput type="number" name="bonus" [(ngModel)]="bonus" />
        </mat-form-field>

        <button
          mat-button
          [mat-dialog-close]="{
            name: selectedRoute,
            drivers: selectedDrivers,
            startDate: startDate,
            endDate: endDate,
            payment: payment,
            experience: experience,
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
  drivers: any[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;
  payment: number | null = null;
  experience: boolean = false;
  bonus: number | null = null;

  selectedRoute: string = '';
  selectedDrivers: string[] = [];
  routes: any[] = [];

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
      drivers: this.selectedDrivers,
      startDate: this.startDate,
      endDate: this.endDate,
      payment: this.payment,
      experience: this.experience,
      bonus: this.bonus,
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
