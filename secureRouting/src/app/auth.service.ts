import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';
import { Warehouse } from './Warehouse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  Warehouse(): Observable<any> {
    console.log("inside request")
    let url = "http://localhost:5256/api/warehouses/warehouses";
    return this.httpClient.get<Warehouse>(url);
  }
}
