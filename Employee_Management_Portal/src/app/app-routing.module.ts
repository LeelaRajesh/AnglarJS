import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { EmployeeDetailComponent} from './employee-detail.component'
import { EmployeeComponent} from './employee.component'
import { DashboardComponent } from './dashboard.component'

const routes: Routes=[
    {path: 'employees',component: EmployeeComponent},
    {path: 'dashboard',component: DashboardComponent},
    {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
    {path: 'detail/:id',component: EmployeeDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }