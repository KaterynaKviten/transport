import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './registr.components.html',
  styleUrls: ['./auth.css'],
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';
  constructor(private authService: AuthService, private router: Router) {}
  register() {
    if (!this.username || !this.password || !this.email) {
      alert('Заповніть всі поля!🥺');
      return;
    }
    this.authService.register(this.username, this.password, this.email).subscribe({
      next: (res: any) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/work-line']);
      },
      error: () => {
        alert('Реєстрація не вдалася🥺');
      },
    });
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
