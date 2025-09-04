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
  // styleUrls: ['../carry.css'],
  template: `
    <h2 mat-dialog-title>Додати маршрут</h2>
    <form (ngSubmit)="onSave()">
      <mat-dialog-content>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Назва маршруту</mat-label>
          <input matInput type="text" name="routeName" [(ngModel)]="routeName" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Відстань (км)</mat-label>
          <input matInput type="number" name="distance" [(ngModel)]="distance" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Кількість днів у дорозі</mat-label>
          <input matInput type="number" name="days" [(ngModel)]="days" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Оплата (грн)</mat-label>
          <input matInput type="number" name="payment" [(ngModel)]="payment" />
        </mat-form-field>

        <button mat-raised-button class="custom-button" type="submit">Зберегти</button>
      </mat-dialog-content>
      <mat-dialog-actions>
        <button mat-button type="button" (click)="onNoClick()">Скасувати</button>
      </mat-dialog-actions>
    </form>
  `,
})
export class RouteLineDialogComponent {
  routeName = '';
  distance: number | null = null;
  days: number | null = null;
  payment: number | null = null;

  constructor(private dialogRef: MatDialogRef<RouteLineDialogComponent>) {}

  onSave(): void {
    this.dialogRef.close({
      routeName: this.routeName,
      distance: this.distance,
      days: this.days,
      payment: this.payment,
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
