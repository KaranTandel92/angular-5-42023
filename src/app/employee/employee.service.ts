import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  url = " http://localhost:3000/employeeDetails"

  getEmployeeData() {
    return this.http.get(this.url);
  }

  sendNewEmployeeData(body: any) {
    return this.http.post(this.url, body);
  }

  deleteEmployeeData(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
