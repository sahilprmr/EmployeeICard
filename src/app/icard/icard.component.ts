import { Component } from '@angular/core';
import { take } from 'rxjs';
import { IcardType } from '../Interface/icardType.model';
import { icardserviceService } from '../Services/icardservice.service';

@Component({
  selector: 'app-icard',
  templateUrl: './icard.component.html',
  styleUrls: ['./icard.component.css']
})
export class IcardComponent {

  employees: IcardType[] = [];
  count = 0;
  constructor(private icardservice: icardserviceService) { }

  ngOnInit() {
    this.icardservice.callApiForData().subscribe(res => {
      this.employees = res;
      console.log(this.employees);
    })
  }

  rightBtn() {
    if (this.count < 10) {
      this.count++;
    }
    else {
      this.count = 0;
    }
  }
  leftBtn() {
    if (this.count > 0) {
      this.count--;
    }
    else {
      this.count = 10;
    }
  }
}
