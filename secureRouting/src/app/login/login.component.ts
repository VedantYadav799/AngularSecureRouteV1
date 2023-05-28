import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Warehouse } from '../Warehouse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  warehouses:Warehouse []|undefined;
  constructor(private svc:AuthService){}
  ngOnInit():void  {
    this.svc.Warehouse().subscribe((res)=>{
      this.warehouses = res;
      console.log(this.warehouses);
      console.log(res);
    })
  }

}
