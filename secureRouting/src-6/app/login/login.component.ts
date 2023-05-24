import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validUser: boolean = false;
  role: any;
  loginFormVisible: boolean = false;
  BtnSignIn: boolean = false;
  BtnSignOut: boolean = false;
  
  user: User | any = {
    contactNumber: "",
    password: ""
  };

  constructor(private svc: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.BtnSignIn =true;
  }

  logIn() {
    this.svc.login(this.user).subscribe((response) => {
      localStorage.setItem('jwtToken', response.token);
      const decodedRole = this.svc.getRoleFromToken(); //decode role from token which is stored in localstorage
      localStorage.setItem('role', decodedRole);
      this.validUser = true;
      this.BtnSignIn=false;
      this.BtnSignOut = true;
     })
  }
   
  login() {
    this.loginFormVisible = true;
    this.BtnSignIn = true;
  }

  logout() {
    this.validUser = false;
    this.BtnSignIn = true;
    this.BtnSignOut = false;
    this.loginFormVisible = false;
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("role");
    this.router.navigate([''])
  }
}
