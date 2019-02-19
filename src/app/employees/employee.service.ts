import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Michael',
            gender: 'Male',
            email: 'rmichaelbics@gmail.com',
            phonenumber: 7639728044,
            contactPreference: 'Email',
            dateofBirth: new Date('06/05/1991'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/Michael.jpg'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            email: 'mary@gmail.com',
            phonenumber: 9841478230,
            contactPreference: 'Phone',
            dateofBirth: new Date('06/05/1991'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/Mary.png'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            email: 'john@gmail.com',
            phonenumber: 7667673882,
            contactPreference: 'Phone',
            dateofBirth: new Date('06/05/1991'),
            department: '1',
            isActive: true,
            photoPath: 'assets/images/Michael.jpg'
        },
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }
    getEmployee(employeeId: number): Employee {
        return this.listEmployees.find(e => e.id === employeeId);
    }
    save(employee: Employee) {
        this.listEmployees.push(employee);

    }
}

