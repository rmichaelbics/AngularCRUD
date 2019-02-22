// import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() searchTerm: string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  confirmDelete: false;
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



  private selectedEmployeeId: number;
  constructor(private _route: ActivatedRoute, private _router: Router,
     private _employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
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

  viewEmployee() {
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm }
    });

  }

  editEmployee() {
    this._router.navigate(['/edit', this.employee.id]);
  }

  deleteEmployee()  {
    this._employeeService.deleteEmployee(this.employee.id).subscribe(
      () => {
        console.log('Employee with Id ' + this.employee.id + ' deleted');
      }
    );
    this.notifyDelete.emit(this.employee.id);
  }

}
