import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let employees =[
            {id:1,name:'Rajesh',dob:'11-21-1991',address:'Steven Drive PA', likes:0,dislikes:0},
    {id:2,name:'Yamini',dob:'12-27-1990',address:'Steven Drive PA', likes:0,dislikes:0},
    {id:3,name:'Dheeraj',dob:'02-27-1988',address:'Steven Drive PA', likes:0,dislikes:0},
    {id:4,name:'Sridhar',dob:'03-26-1983',address:'Steven Drive PA', likes:0,dislikes:0},
    {id:5,name:'Veeru',dob:'04-20-1987',address:'Steven Drive PA', likes:0,dislikes:0}
        ];
        return {employees};
    }
}