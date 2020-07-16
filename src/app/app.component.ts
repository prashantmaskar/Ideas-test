import { Component } from '@angular/core';
import { DataService } from './Services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DatePipe]
})
export class AppComponent {
  public personName:UserInfo;
  constructor(
    public dataservice:DataService,
  ){
this.personName = this.dataservice.getPersoninfo();
  }

}

export interface UserInfo{
  Name:string,
  Email:string,
  Contact:number,
  DOB:Date,
  Salary:number,
  Company?:string,
}
