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

  username:string |any;
  password:string |any
 loggedIn:any;
 role:any;
  constructor(private svc:AuthService, private router:Router){}

  logIn(){
    if(this.svc.Login(this.username,this.password)){
      console.log("Login button clicked");
      this.loggedIn=true;
      console.log("user is valid");
      this.router.navigate(['/home']);
      return true;
    }
    else{
      console.log("Invalid login");
      return false;
    }
  

}
}
