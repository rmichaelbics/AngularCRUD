import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})

export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto;
  bsDatepickerConfig: Partial<BsDatepickerConfig>;
  @ViewChild('employeeForm') public createEmpForm: NgForm;
  panelTitle: string;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phonenumber: null,
    contactPreference: null,
    dateofBirth: null,
    department: 'select',
    isActive: false,
    photoPath: null
  };

  departments: Department[] = [
    { id: 1, departmentName: 'HR' },
    { id: 2, departmentName: 'IT' },
    { id: 3, departmentName: 'Payroll' },
    { id: 4, departmentName: 'Help Desk' },
  ];
  constructor(private _employeeService: EmployeeService, private _router: Router,
    private _route: ActivatedRoute) {
    this.bsDatepickerConfig = Object.assign(
      {}, {
        containerClass: 'theme-dark-blue'
      });
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');

      this.getEmployee(id);
    });

  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        email: '',
        phonenumber: null,
        contactPreference: null,
        dateofBirth: null,
        department: 'select',
        isActive: false,
        photoPath: null
      };
      this.panelTitle = 'Create Employee';
      this.createEmployeeForm.reset();
    } else {
      this.panelTitle = 'Edit Employee';
        this._employeeService.getEmployee(id).subscribe(
        (employee) => this.employee = employee
      );
    }
  }

  saveEmployee(): void {
    // const employee: Employee = Object.assign({}, this.employee);
    if (this.employee.id === null) {
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          this.createEmpForm.reset();
          this._router.navigate(['list']);
        }
      );
    } else {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          this.createEmpForm.reset();
          this._router.navigate(['list']);
        }
      );
    }
  }

  resetEmployeeForm(): void {
    // this._employeeService.name = '';
  }
}
