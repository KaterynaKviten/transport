import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-route-line-dialog',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule],
  //   styleUrls: ['../carry.css'],
  template: `
    <h2 mat-dialog-title>Додати перевезення</h2>
    <form (ngSubmit)="onSave()">
      <mat-dialog-content>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Маршрут</mat-label>
          <input matInput type="text" name="routeName" [(ngModel)]="routeName" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Водій</mat-label>
          <input matInput type="text" name="driver" [(ngModel)]="driver" />
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
          <mat-label>Премія (грн)</mat-label>
          <input matInput type="number" name="bonus" [(ngModel)]="bonus" />
        </mat-form-field>

        <button mat-raised-button class="custom-button" type="submit">Зберегти</button>
      </mat-dialog-content>
      <mat-dialog-actions>
        <button mat-button type="button" (click)="onNoClick()">Скасувати</button>
      </mat-dialog-actions>
    </form>
  `,
})
export class WorkLineDialogComponents {
  routeName = '';
  driver = '';
  startDate: string = '';
  endDate: string = '';
  bonus: number | null = null;

  constructor(private dialogRef: MatDialogRef<WorkLineDialogComponents>) {}

  onSave(): void {
    this.dialogRef.close({
      routeName: this.routeName,
      driver: this.driver,
      startDate: this.startDate,
      endDate: this.endDate,
      bonus: this.bonus,
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
