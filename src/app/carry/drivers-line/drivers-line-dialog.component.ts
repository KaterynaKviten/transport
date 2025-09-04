import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-drivers-line-dialog',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule],
  // styleUrls: ['../carry.css'],
  template: `
    <h2 mat-dialog-title>Додати водія</h2>
    <mat-dialog-content>
      <mat-form-field class="full-width">
        <mat-label>Прізвище</mat-label>
        <input matInput [(ngModel)]="lastName" name="lastName" />
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>Ім’я</mat-label>
        <input matInput [(ngModel)]="firstName" name="firstName" />
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>По батькові</mat-label>
        <input matInput [(ngModel)]="middleName" name="middleName" />
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>Стаж (років)</mat-label>
        <input matInput type="number" [(ngModel)]="experience" name="experience" />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Скасувати</button>
      <button
        mat-button
        [mat-dialog-close]="{lastName, firstName, middleName, experience}"
        cdkFocusInitial
      >
        Зберегти
      </button>
    </mat-dialog-actions>
  `,
})
export class DriversLineDialogComponent {
  lastName = '';
  firstName = '';
  middleName = '';
  experience: number | null = null;

  constructor(private dialogRef: MatDialogRef<DriversLineDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
