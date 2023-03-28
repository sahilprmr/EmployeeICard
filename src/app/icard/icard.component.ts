import { Component } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { IcardType } from '../Interface/icardType.model';
import { icardserviceService } from '../Services/icardservice.service';

@Component({
  selector: 'app-icard',
  templateUrl: './icard.component.html',
  styleUrls: ['./icard.component.css']
})
export class IcardComponent {

  employees: IcardType[] = [];
  empToBeDeleted!:IcardType;
  imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiTsb3IFAF44BEfO-IDrTO9Pa1XsiuLMb0g&usqp=CAU';
  editemployee =this.icardservice.editemployee;
  addemployee = this.icardservice.addemployee;
  count = 0;
  EmployeeId = new BehaviorSubject<number>(0);
  constructor(private icardservice: icardserviceService) { }
  ngOnInit() {
    this.icardservice.callApiForData().
    subscribe(res => {
                      this.employees = res;
                      console.log(this.employees.length);         
    })   
  }
  

  rightBtn() {
    if (this.count === this.employees.length) {
      this.count = 0;  
    }
    else {
      this.count++;
    }
  }
  leftBtn() {
    if (this.count === 0) {
      this.count = this.employees.length;
    }
    else {
      this.count--;
    }
  }
  editingEmpBtnClicked(id:number){
    this.EmployeeId.next(id);
    this.icardservice.editemployee.next(!this.editemployee.value);
    this.icardservice.addemployee.next(false);
  }
  addEmpBtnClicked(){
    this.addemployee.next(!this.addemployee.value);  
    this.icardservice.editemployee.next(false);
  }
  onlyICard(){
    this.icardservice.addemployee.next(false);
    this.icardservice.editemployee.next(false);
    this.empToBeDeleted = this.employees[this.count]; 
    this.icardservice.callApiToDeleteData(this.empToBeDeleted).subscribe();
  }
}
