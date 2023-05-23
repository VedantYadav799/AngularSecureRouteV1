import { Component } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loggedIn: boolean = false;
  role: any;
  status: boolean = false;
  signinstatus: boolean = false;
  signout: boolean = false;
  user: User | any = {
    contactNumber: "",
    password: ""
  };

  constructor(private svc: AuthService, private router: Router) { }

  logIn() {
    this.svc.login(this.user).subscribe((response) => {
      localStorage.setItem('jwtToken', response.token);
      this.loggedIn = true;
      this.signout = true;
     })
  }

  login() {
    this.status = true;
    this.signinstatus = true;
  }

  logout() {
    this.loggedIn = false;
    this.signinstatus = false;
    this.signout = false;
    this.status = false;
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("role");
    this.router.navigate([''])
  }
}
