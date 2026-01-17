import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  login(credentials: { email: string, password: string }): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, credentials);
  }

  googleLogin(token: string): Observable<any> {
    const url = `${this.baseUrl}/google-login`;
    return this.http.post(url, { token });
  }

  signup(user: any): Observable<any> {
    const url = `${this.baseUrl}/signup`;
    return this.http.post(url, user);
  }

  test(){
    const url = this.baseUrl + '/auth/test'
    return this.http.get(url);
  }
}
