import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private svc: AuthService) { }

  role = this.svc.getRoleFromToken();
  statusAdmin: boolean = false;
  statusStoreManager: boolean = false
  statusSupervisor: boolean = false
  statusStoreWorker: boolean = false

  ngOnInit(): void {
    console.log("on init");
    console.log(this.role);
    if (this.role == "Incharge") {
      this.statusAdmin = true;
      alert("login as a Incharge");
    }
    if (this.role == "Store Manager") {
      this.statusStoreManager = true;
      alert("login as a Store Manager");

    }
    if (this.role == "Supervisor") {
      this.statusSupervisor = true;
      alert("login as a Supervisor");

    }
    if (this.role == "Store Worker") {
      this.statusStoreWorker = true;
      alert("login as a Store Worker");

    }
  }
}
