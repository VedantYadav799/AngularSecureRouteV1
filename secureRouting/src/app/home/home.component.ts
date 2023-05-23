import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private svc:AuthService){}
role=this.svc.getRoleFromToken();
  statusAdmin:boolean=false;
  statusStoreManager:boolean=false
  statusSupervisor:boolean=false
  statusStoreWorker:boolean=false

  
  
  ngOnInit(): void {
    console.log("on init")
    console.log(this.role);
    if(this.role=="Incharge"){
      this.statusAdmin=true;
    }
    if(this.role=="Store Manager"){
      this.statusStoreManager=true;
    }
    if(this.role=="Supervisor"){
      this.statusSupervisor=true;
    }
    if(this.role=="Store Worker"){
      this.statusStoreWorker  =true;
    }
  }
}
