import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-componant',
  templateUrl: './child-componant.component.html',
  styleUrls: ['./child-componant.component.css']
})
export class ChildComponantComponent implements OnInit {
  @Input()flag:boolean;
  constructor() {
   }

  ngOnInit(): void {
  }
changeProp(){
  this.flag = !this.flag;
}
}
