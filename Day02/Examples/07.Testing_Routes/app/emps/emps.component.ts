import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent
{
  public emps:any[]  = [];

  constructor()
  {
    this.emps = [
      {empno: 1025, ename : "Scott", job : "Manager", sal : 56000},
      {empno: 1026, ename : "Smith", job : "Sr.Manager", sal : 65000},
      {empno: 1027, ename : "Sandy", job : "Lead", sal : 45000},
      {empno: 1028, ename : "Sam", job : "Group Manager", sal : 75000},
    ];
  }

  public  f1(n:number):void
  {
    this.emps.splice(n, 1);
  }


  public  f2( ):void
  {
    var obj:any  = {empno: 5025, ename : "Ravi", job : "Manager", sal : 56000};
    this.emps.push(obj);
  }


}
