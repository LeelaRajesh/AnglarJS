import { Component } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/employees">Employees</a>
    </nav>
    <router-outlet></router-outlet>`,
    styleUrls: ['./app.component.css']
    
})

export class AppComponent{
    title="Employees Details";
}