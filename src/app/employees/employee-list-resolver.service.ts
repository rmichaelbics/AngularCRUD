import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[]> {

    constructor(private _employeeSerivce: EmployeeService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
        return this._employeeSerivce.getEmployees();
    }
}
