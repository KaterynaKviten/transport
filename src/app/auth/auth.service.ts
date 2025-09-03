import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('/api/login/password', { username, password }, { withCredentials: true });
  }

  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post(
      '/api/register',
      { username, password, email }
      //   { withCredentials: true }
    );
  }
}
