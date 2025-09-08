import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './registr.components';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule],
  templateUrl: './login.components.html',
  styleUrls: ['./auth.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res: any) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/work-line']);
      },
      error: () => {
        alert('Невірний логін або пароль🥺');
      },
    });
  }
}
