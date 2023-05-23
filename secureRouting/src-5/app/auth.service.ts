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
      const role = localStorage.setItem('role', decodedToken.role)
      return decodedToken.role;
    }
    return '';
  }
  getInchargeIdFromToken(): number {
    const token: any = localStorage.getItem('jwtToken');
    const decodedToken: any = this.jwtHelper.decodeToken(token)
    return decodedToken.InchargeId;
  }
  getSupervisorFromToken(): number {
    const token: any = localStorage.getItem('jwtToken');
    const decodedToken: any = this.jwtHelper.decodeToken(token)
    return decodedToken.supervisorId;
  }
  getStoreManagerFromToken(): number {
    const token: any = localStorage.getItem('jwtToken');
    const decodedToken: any = this.jwtHelper.decodeToken(token)
    return decodedToken.storemanagerId;
  }
  getStoreWorkerFromToken(): number {
    const token: any = localStorage.getItem('jwtToken');
    const decodedToken: any = this.jwtHelper.decodeToken(token)
    return decodedToken.storeworkerId;
  }

}
