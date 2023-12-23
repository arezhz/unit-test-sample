import {Injectable} from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService) {
  }

  sum(num1: number, num2: number) {
    const result = num1 + num2;
    this.loggerService.log(result);
    return result
  }

  subtraction(num1: number, num2: number) {
    const result = num1 - num2;
    this.loggerService.log(result);
    return result
  }
}
