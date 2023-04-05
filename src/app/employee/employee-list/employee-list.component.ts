import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() allEmployeeData: any
  @Output() removeEmployeeData = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  deleteData(id: any) {
    this.removeEmployeeData.emit(id);
  }

}
