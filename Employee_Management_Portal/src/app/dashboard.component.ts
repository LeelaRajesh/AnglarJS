import { Component, OnInit } from '@angular/core'

import { Employee } from './employee'
import { EmployeeService } from './employee.service'

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit { 
    employees: Employee[]=[];
    maxlikesemp: Employee;
    maxCount=0;i=0;
    constructor(private employeeService: EmployeeService){ };
    ngOnInit(): void{
        this.employeeService.getEmployees().then(employees => this.employees=employees.slice(0,2));
    }
}