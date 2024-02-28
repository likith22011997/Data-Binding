import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css'],
  providers: [LoggerService]
})
export class HttpCallComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.loggerService.getMethod().subscribe(function (data) {
      this.response = data;
      console.log("response : ", this.response.title);
    })
  }

}
