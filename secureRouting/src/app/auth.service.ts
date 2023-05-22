import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Users:User[]=[
      {
            "userId":1,
            "username":"Abhay",
            "password":"password",
            "role":"Admin"
          },
          {
            "userId":2,
            "username":"Sahil",
            "password":"password",
            "role":"User"
          },
          {
            "userId":3,
            "username":"Shubham",
            "password":"password",
            "role":"User"
          },
          {
            "userId":4,
            "username":"Jayesh",
            "password":"password",
            "role":"Admin"
          }
    
  ];
  loggedIn:any;
  Login(username:string, password:string):boolean{
    const usr= this.Users.find((u)=>u.username === username && u.password === password)
    if(usr){
      this.loggedIn=usr;
      localStorage.setItem("role", usr.role)
      return true
    }
    return false
  }

}
