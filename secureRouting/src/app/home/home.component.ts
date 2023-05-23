import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private svc: AuthService) { }
  empFirstName:string |any
  empLastName:string |any
  id:number |any
  empid = localStorage.getItem('employeeId') || '{}';
  status:boolean =false;


  async ngOnInit(): Promise<any> {
    console.log("on init");
    console.log(this.empid);
    this.id = parseInt(this.empid);
     this.svc.getEmpById(this.id).subscribe((Response)=>{
      this.empFirstName =Response.employeeFirstName;
      this.empLastName=Response.employeeLastName

    })

    }
  }
