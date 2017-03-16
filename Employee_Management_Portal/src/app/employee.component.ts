import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import {Employee} from './employee';
import {empl} from './mock_employees';
import {EmployeeService} from './employee.service'

@Component({
  moduleId: module.id,
  selector: 'my-employees',
  templateUrl: './employee.component.html',
  styleUrls:  ['./employee.component.css']
})

export class EmployeeComponent implements OnInit  { 
  employees: Employee[];
  constructor(private employeeService: EmployeeService,
  private router: Router){ };
  currentemp: Employee;
  getEmployees(): void{
    this.employeeService.getEmployees().then(employees =>
    this.employees=employees);
  }
  currentEmployee(emp: Employee): void{
    this.currentemp=emp;
  }
  ngOnInit(): void{
    this.getEmployees();
  }
  gotoDetail(): void{
    this.router.navigate(['/detail',
    this.currentemp.id]);
  }
}

