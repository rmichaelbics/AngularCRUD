import { Pipe, PipeTransform} from '@angular/core';
import { Employee } from '../models/employee.model';
import { serializePath } from '@angular/router/src/url_tree';

@Pipe({
    name: 'employeeFilter',
    pure: true
})
export class EmpFilterPipe implements PipeTransform {
    transform(employees: Employee[], searchTerm: string): Employee[] {
        if (!employees || !searchTerm) {
            return employees;
        }
        return employees.filter(employee =>
            employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
