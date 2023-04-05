import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  public employeeFormGroup!: FormGroup;
  public isFormCancel: boolean = false;
  @Output() cancelEvent = new EventEmitter;
  @Output() addEmployeeData = new EventEmitter;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    this.employeeFormGroup = new FormGroup({
      name: new FormControl(null),
      department: new FormControl(null),
      age: new FormControl(null),
    })
  }

  submitEmployeeData() {
    this.addEmployeeData.emit(this.employeeFormGroup.value);
  }

  onSubmit() {
    console.log(this.employeeFormGroup.value);
  }

  cancelForm() {
    this.cancelEvent.emit(this.isFormCancel);
  }
}
