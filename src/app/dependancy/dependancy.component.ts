import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../service/logger.service';
import { logging } from 'protractor';


@Component({
  selector: 'app-dependancy',
  templateUrl: './dependancy.component.html',
  styleUrls: ['./dependancy.component.css'],
  providers: [LoggerService]
})
export class DependancyComponent implements OnInit {

  Training = "DEV DCoE";
  // customers data in loggerservice has been called here in ngoninit. 
  // means data is fetched through services
  customers;

  // example for creating service -- loggerService
  // logging method is called from logger.service.ts  of LoggerService class
  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
    // return shd be mandatorily present in logger.service.ts or else (this.Training) displays error
    // this.customers = this.loggerService.logging();
  }

  logger() {
    this.customers = this.loggerService.logging();
    // push displays array with valure true or false.. true if even and false if odd
    // this.customers.push(this.loggerService.logging());
  }
}

