import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  login(username: string, password: string) {
    return this.http.post('/api/login/password', { username, password }).pipe(
      tap((res: any) => {
        localStorage.setItem('user', JSON.stringify(res.user));
      })
    );
  }

  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post('/api/register', { username, password, email }).pipe(
      tap((res: any) => {
        localStorage.setItem('user', JSON.stringify(res.user));
      })
    );
  }
  logout() {
    localStorage.removeItem('user');
  }

  get currentUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
