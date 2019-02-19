import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  @Input() employees: Employee[];
  employeeToDisplay: Employee;
  filteredEmployee: Employee[];
  private _searchTerm: string;
  // @Input() dataFromChild: Employee;
  private arrayIndex = 1;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployee = this.filterEmployee(value);
  }
  constructor(private _employeeService: EmployeeService, private _router: Router, private _activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.filteredEmployee = this.employees;
    // this.employeeToDisplay = this.employees[0];
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId]);
  }

  filterEmployee(filterEmp: string) {
    console.log(filterEmp);
    console.log(this.filteredEmployee);
    return this.employees.filter(emp => emp.name.toLocaleLowerCase().indexOf(filterEmp.toLocaleLowerCase()) !== -1);
  }

  changeEmployeeName() {
    // this.employees[0].name = 'Anthony';
    const newEmployeeArray: Employee[] = Object.assign([], this.employees);
    newEmployeeArray[0].name = 'Anthony';
    this.employees = newEmployeeArray;
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
