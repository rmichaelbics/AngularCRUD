// import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;

  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
//   private _employeeId: number;
// private _employee: Employee;
// @Input()
// set employee(val: Employee) {
//   console.log('Current : ' + val.name);
//   console.log('Previous : ' + (this._employee ? this._employee.name : 'NULL'));
//   this._employee = val;
// }
// get employee(): Employee {
//   return this._employee;
// }

// @Input()
// set employeeId(val: number) {
//   this.employeeId = val;
// }
// get employeeId(): number {
//   return this.employeeId;
// }
  constructor() { }

  ngOnInit() {
  }

  // handleClick() {
  //   this.notify.emit(this.employee);
  // }
  // ngOnChanges(changes: SimpleChanges) {

  //   for (const propName of Object.keys(changes)) {
  //       console.log(propName);
  //       const change = changes[propName];
  //       const from = JSON.stringify(change.previousValue);
  //       const to = JSON.stringify(change.currentValue);

  //       console.log(propName + 'Changed from ' + from + 'to ' + to);
  //   }
  //   const previousEmployee = <Employee> changes.employee.previousValue;
  //   const currentEmployee = <Employee> changes.employee.currentValue;
  //   console.log('Previous Employee: ' + (previousEmployee ? previousEmployee.name : 'Null'));
  //   console.log('Current Employee: ' + currentEmployee.name);
  //   console.log(changes);
  // }

  getEmployeeNameandGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }

}
