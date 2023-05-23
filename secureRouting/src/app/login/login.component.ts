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
  user:User |any={
    contactNumber:"",
    password:""
  };
  validUser:boolean=false;
  constructor(private svc:AuthService,private router:Router){}
  
  
  logIn(){
    this.svc.login(this.user).subscribe((response)=>{
      localStorage.setItem('jwtToken', response.token);
    if(this.user){
      this.validUser=true;
    }
      const role = this.svc.getRoleFromToken();
      console.log("role from token ")
      console.log(role)
      if (role == "Incharge") {
        const InchargeId = this.svc.getInchargeIdFromToken();
        console.log(InchargeId);
      } 
      if (role == "supervisor") {
        const supervisorId = this.svc.getSupervisorFromToken();
        console.log(supervisorId);
        // this.router.navigate(['/login']);
      }
      if (role == "store manager") {
        const storemanagerId = this.svc.getStoreManagerFromToken();
        console.log(storemanagerId);
      }
      if (role == "store worker") {
        const storeworkerId = this.svc.getStoreWorkerFromToken();
        console.log(storeworkerId);
      }
    
    })
  
       this.router.navigate(['/home']);
      return true;
    }
}
