import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
@Injectable()
export class EmployeeService {

    constructor( private _httpClient: HttpClient) {
    }
    baseUrl = 'http://localhost:3000/employees';
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

    getEmployees(): Observable<Employee[]> {
      return  this._httpClient.get<Employee[]>('http://localhost:3000/employees');
    }
    getEmployee(employeeId: number): Observable<Employee> {
        return this._httpClient.get<Employee>(`${this.baseUrl}/${employeeId}`);
    }
    addEmployee(employee: Employee): Observable<Employee> {
            return this._httpClient.post<Employee>(this.baseUrl, employee, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            });
    }

    updateEmployee(employee: Employee): Observable<void> {
        return this._httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
        });
    }

    deleteEmployee(id: number): Observable<void> {
        return this._httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error' + errorResponse.error.message);
        } else {
            console.error('Server Side Error' + errorResponse);
        }
    }

    // deleteEmployee(id: number) {
    //   const deleteId = +this.listEmployees.findIndex(e => e.id === id);
    //   if (deleteId !== -1) {
    //     this.listEmployees.splice(deleteId, 1);
    //   }
    // }
}


