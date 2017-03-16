import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { EmployeeDetailComponent} from './employee-detail.component'
import { EmployeeComponent} from './employee.component'
import { EmployeeService } from './employee.service'
import { DashboardComponent } from './dashboard.component'

import { AppRoutingModule } from './app-routing.module'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'


@NgModule({
  imports:      [ BrowserModule, FormsModule, 
                  AppRoutingModule, HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [ AppComponent, EmployeeDetailComponent, 
  EmployeeComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService]
})
export class AppModule { }
