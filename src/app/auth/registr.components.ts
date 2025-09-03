import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div class="reg-container">
      <h3>Реєстрація</h3>
      <form (ngSubmit)="register()">
        <mat-form-field class="full-width">
          <mat-label>Логін</mat-label>
          <input matInput [(ngModel)]="username" name="username" required />
        </mat-form-field>
        <mat-form-field class="full-width">
          <mat-label>Пароль</mat-label>
          <input matInput [(ngModel)]="password" name="password" type="password" required />
        </mat-form-field>
        <mat-form-field class="full-width">
          <mat-label>Email</mat-label>
          <input matInput [(ngModel)]="email" name="email" type="email" required />
        </mat-form-field>
        <button mat-raised-button class="button-registr" type="submit">Зареєструватися</button>
      </form>
    </div>
  `,
  styleUrls: ['./auth.css'],
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';
  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<RegisterComponent>
  ) {}
  register() {
    this.authService.register(this.username, this.password, this.email).subscribe({
      next: () => {
        alert('Реєстрація успішна!');
        this.dialogRef.close();
      },
      error: () => {
        alert('Реєстрація не вдалася');
      },
    });
  }
}
