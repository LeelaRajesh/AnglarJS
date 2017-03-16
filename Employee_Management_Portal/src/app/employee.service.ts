import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

import {Employee} from './employee'

@Injectable()
export class EmployeeService {
    private emplUrl ='api/employees';
    private headers = new Headers({'Content-Type':'application/json'});
    constructor(private http:Http){ }
    getEmployees(): Promise<Employee[]>{
        return this.http.get(this.emplUrl)
        .toPromise().then(response => response.json().data as Employee[])
        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any>{
        console.error('An error occured ', error);
        return Promise.reject(error.message || error);
    }
    getEmployee(id: number): Promise<Employee>{
        const url=`${this.emplUrl}/${id}`;
        return this.http.get(url)
        .toPromise().then(response => response.json().data as Employee)
        .catch(this.handleError);
    }
    update(emp:Employee):Promise<Employee>{
        const url= `${this.emplUrl}/${emp.id}`;
        return this.http.put(url,JSON.stringify(emp),
        {headers: this.headers}).toPromise().
        then(()=>emp).catch(this.handleError);
    }
}