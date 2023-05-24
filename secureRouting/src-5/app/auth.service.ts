import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './User';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService) { }

  login(user: User): Observable<any> {
    console.log("inside request")
    let url = "http://localhost:5145/api/login/authenticate/";
    return this.httpClient.post<User>(url, user);
  }

  getRoleFromToken(): string {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken: any = this.jwtHelper.decodeToken(token);
      console.log(decodedToken);
      localStorage.setItem('role', decodedToken.role)
      return decodedToken.role;
    }
    return '';
  }

}

