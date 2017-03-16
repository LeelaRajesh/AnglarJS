import {Component, Input, OnInit} from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'
import 'rxjs/add/operator/switchMap';

import {EmployeeService} from './employee.service'
import { Employee} from './employee'


@Component({
    moduleId: module.id,
    selector: 'my-emp-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit { 
    @Input()
    curemp: Employee;
    constructor(
        private empService: EmployeeService,
        private route: ActivatedRoute,
        private location: Location
    ){ }
    ngOnInit(): void{
        this.route.params
        .switchMap((params: Params) => 
        this.empService.getEmployee(+params['id'])).
        subscribe(curemp => this.curemp = curemp);
    }
    likesIncrement(emp: Employee){
        emp.likes++;
    }
    dislikesIncrement(emp: Employee){
        emp.dislikes++;
    }
    goBack(): void {
        this.location.back();  
    }
    save(): void{
        this.empService.update(this.curemp).then(()=>this.goBack());
    }
}