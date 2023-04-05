import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public formToggle: boolean = false;
  public isButtonClick!: boolean;
  public isToggle = false
  public allEmployeeData!: any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  public getEmployeeData() {
    this.employeeService.getEmployeeData().subscribe(res => {
      // debugger
      this.allEmployeeData = res;
    });
  }

  openForm(data: any) {
    // debugger
    this.formToggle = data;
  }

  formHide(data: any) {
    this.formToggle = data;
    console.log(data);

  }
  addEmpolyee() {
    this.isButtonClick = true;
  }

  formOn() {
    // debugger
    this.isToggle = !this.isToggle
  }

  adddetails(data: any) {
    this.employeeService.sendNewEmployeeData(data).subscribe(res => res);
    this.getEmployeeData();
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployeeData(id).subscribe(res => res);
    this.getEmployeeData();
  }

}
