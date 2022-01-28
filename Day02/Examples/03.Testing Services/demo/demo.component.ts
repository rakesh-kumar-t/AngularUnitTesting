import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public result:number = 0;

  constructor(private service:CalculatorService) { }


  ngOnInit(): void {
  }


  public addButton_click()
  {
    this.result = this.service.add(10,20);
  }


}
