// import {Injectable} from '@angular/core';

// // @Injectable({
// //     // providedIn: 'root',
// //   })
export class DataService{
    constructor(){}
public pesron = {
    'Name':'prashant',
    'Email':'prashant@gmail.com',
    'Contact':8600249455,
    'DOB':new Date('10/30/1993'),
    'Salary':25000

};

getPersoninfo(){
return this.pesron;
  }  
}