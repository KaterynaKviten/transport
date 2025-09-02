import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user', username);
      return true;
    }
    return false;
  }
  register(username: string, password: string, email: string): boolean {
    return true;
  }
}
