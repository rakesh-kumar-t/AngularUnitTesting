import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform addition operation', () => {
    let result = service.add(10,20);
    expect(result).toBe(30);

    result = service.add(10, -20);
    expect(result).toBe(-10);

    result = service.add(-10, -20);
    expect(result).toBe(-30);
  });

  it('should perform subtract operation', () => {
    let result = service.subtract(45,25);
    expect(result).toBe(20);

    result = service.subtract(-20, 20);
    expect(result).toBe(-40);

    result = service.subtract(-20, -20);
    expect(result).toBe(0);
  });
});
