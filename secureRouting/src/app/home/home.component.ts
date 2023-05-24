import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private svc: AuthService) { }
  empFirstName: string | any
  empLastName: string | any
  id: number | any
  statusAdmin: boolean = false;
  statusStoreManager: boolean = false
  statusSupervisor: boolean = false
  statusStoreWorker: boolean = false
  empid = localStorage.getItem('employeeId') || '{}';
  role = localStorage.getItem("role")

  
  async ngOnInit(): Promise<any> {

    //get the employee role from and localstorage and show links according to roles
    console.log("on init");
    if (this.role == "Incharge") {
      this.statusAdmin = true;
    }
    if (this.role == "Store Manager") {
      this.statusStoreManager = true;
    }
    if (this.role == "Supervisor") {
      this.statusSupervisor = true;
    }
    if (this.role == "Store Worker") {
      this.statusStoreWorker = true;
    }

    //get employee name from employee id which is stored in localstorage
    console.log(this.empid);
    this.id = parseInt(this.empid);
    this.svc.getEmpById(this.id).subscribe((Response) => {
      this.empFirstName = Response.employeeFirstName;
      this.empLastName = Response.employeeLastName;
      console.log(Response);
    })
  }

}
