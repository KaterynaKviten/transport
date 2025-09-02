import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './registr.components';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule],
  template: `
    <mat-dialog-content>
      <div class="login-container">
        <h3>Вітаємо!</h3>
        <form (ngSubmit)="login()">
          <mat-form-field class="full-width">
            <mat-label>Логін</mat-label>
            <input matInput [(ngModel)]="username" name="username" required />
          </mat-form-field>
          <mat-form-field class="full-width">
            <mat-label>Пароль</mat-label>
            <input matInput [(ngModel)]="password" name="password" type="password" required />
          </mat-form-field>
          <button mat-raised-button class="button-login" type="submit">Увійти</button>
          <button mat-button class="button-registr" type="button" (click)="openRegister()">
            Реєстрація
          </button>
        </form>
      </div>
    </mat-dialog-content>
  `,
  styleUrls: ['./auth.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private dialog: MatDialog, private authService: AuthService) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.dialog.closeAll();
    } else {
      alert('Невірний логін або пароль');
    }
  }
  openRegister() {
    this.dialog.closeAll();
    this.dialog.open(RegisterComponent, {
      width: '400px',
    });
  }
}
