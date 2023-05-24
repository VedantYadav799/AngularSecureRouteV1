import { Component } from '@angular/core';
import { User } from '../User';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = {
    ContactNumber: '',
    Password: ''
  }
  loggedIn: any;
  role: any;

  constructor(private svc: AuthService, private router: Router) { }

  logIn() {
    this.svc.login(this.user).subscribe((res) => {
      console.log(res.token);
      localStorage.setItem('jwt', res.token);
      console.log(res);
    })




  }
}
