import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../../../shared/api.token';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface User {
  id: number;
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(API_URL) private api: string, private http: HttpClient) {}

  // private auth = new BehaviorSubject<AuthState>(this.getLocalState());
  // public auth$ = this.auth.asObservable().pipe(distinctUntilChanged());

  // public getLocalState(): AuthState {
  //   const localState = localStorage.getItem('auth');
  //   console.log('Local', localState);
  //   if (localState) {
  //     return JSON.parse(localState) as AuthState;
  //   }
  //   console.log('Local State', localState);
  //   return initialState;
  // }

  register(credentials: LoginCredentials): Observable<any> {
    const path = `${this.api}/auth/register`;
    return this.http.post<LoginCredentials>(path, credentials);
  }

  login(credentials: LoginCredentials): Observable<any> {
    const path = `${this.api}/auth/login`;
    return this.http.post<LoginCredentials>(path, credentials).pipe(
      map((data: any) => {
        console.log('DD', data);
        sessionStorage.setItem('access_token', data.access_token);
        return data;
      })
    );
  }

  // logout(): void {
  //   localStorage.removeItem('auth');
  //   // this.auth.next(initialState);
  //   // this.router.navigateByUrl('auth/login').then();
  // }
}
