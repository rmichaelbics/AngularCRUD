import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
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
  constructor(private _employeeService: EmployeeService, private _router: Router) {
    this.bsDatepickerConfig = Object.assign(
      {}, {
        containerClass: 'theme-dark-blue'
      });
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }

  saveEmployee(): void {
    this._employeeService.save(this.employee);
    // this._employeeService.reset();
    this._router.navigate(['list']);
  }

  resetEmployeeForm(): void {
    // this._employeeService.name = '';
  }
}
