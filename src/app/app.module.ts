import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBootstrapModule } from './app-bootstrap.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { SelectRequiredValidatorDirective } from './shared/SelectRequiredValidatorDirective';
import { EmployeeService } from './employees/employee.service';
import { createEmployeeCanDeactiveGuardService } from './employees/create-employee-can-deactive-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmpFilterPipe} from './employees/employee-filter.pipe';

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create',
   component: CreateEmployeeComponent,
  canDeactivate: [createEmployeeCanDeactiveGuardService]},
  {path: 'employees/:id', component: EmployeeDetailsComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    SelectRequiredValidatorDirective,
    EmployeeDetailsComponent,
    EmpFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppBootstrapModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, createEmployeeCanDeactiveGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
