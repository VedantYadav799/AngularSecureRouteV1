import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
 
  login(user:User):Observable<any>{
    console.log("inside request")
    let url ="http://localhost:5145/api/login/authenticate/";
      return this.httpClient.post<User>(url,user);
      }
}
