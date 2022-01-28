import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger:LogService) { }

  add(n1: number, n2:number) {
    this.logger.log("Addition operation is performed");
    return n1 + n2;
  }

  subtract(n1: number, n2:number) {
    this.logger.log("Subtraction operation is performed");
    return n1 - n2;
  }
}
