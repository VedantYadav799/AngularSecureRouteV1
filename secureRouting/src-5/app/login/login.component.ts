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
  user: User | any = {
    contactNumber: "",
    password: ""
  };
  validUser: boolean = false;
  constructor(private svc: AuthService, private router: Router) { }

  logIn() {
    this.svc.login(this.user).subscribe((response) => {
      
      localStorage.setItem('jwtToken', response.token);
      if (this.user) {
        this.validUser = true;
      }
    })
    this.router.navigate(['/home']);
    return true;
  }
}
