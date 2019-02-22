import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBootstrapModule } from './app-bootstrap.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

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
// import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardSerivce } from './employees/employee-details-guard.service';
import { AccordionComponent } from './shared/accordion.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeesComponent, resolve: {employeelist: EmployeeListResolverService}},
  {path: 'edit/:id',
   component: CreateEmployeeComponent,
  canDeactivate: [createEmployeeCanDeactiveGuardService]},
  {path: 'employees/:id', component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardSerivce]},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'notfound' ,  component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    SelectRequiredValidatorDirective,
    EmployeeDetailsComponent,
    EmpFilterPipe,
    PageNotFoundComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppBootstrapModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, createEmployeeCanDeactiveGuardService,
    EmployeeListResolverService, EmployeeDetailsGuardSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
