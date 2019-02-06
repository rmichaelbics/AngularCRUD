import { Component, OnInit , Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  @Input() employees: Employee [] ;
  employeeToDisplay: Employee;
  // @Input() dataFromChild: Employee;
  private arrayIndex = 1;
  constructor(private _employeeService: EmployeeService, private _router: Router  ) { }

  ngOnInit() {
    this.employees =  this._employeeService.getEmployees();
    // this.employeeToDisplay = this.employees[0];
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId]);
  }
  // handleNotify(eventData: Employee) {
  //   this.dataFromChild = eventData;
  // }
  // nextEmployee(): void {
  //   console.log(this.employees.length);
  //   if (this.arrayIndex < this.employees.length) {
  //       this.employeeToDisplay = this.employees[this.arrayIndex];
  //       this.arrayIndex++;
  //   } else {
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;
  //   }
  // }
}
