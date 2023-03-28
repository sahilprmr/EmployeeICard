import { Component, ElementRef, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { IcardComponent } from 'src/app/icard/icard.component';
import { IcardType } from 'src/app/Interface/icardType.model';
import { icardserviceService } from 'src/app/Services/icardservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  newEmployee!:IcardType;
  id = this.icard.count;
constructor(private icardservice:icardserviceService,private icard:IcardComponent){}

ngOnInit(){}

AddNewEmployeeToApi(newEmpData:any){
  this.newEmployee = newEmpData;
  this.icardservice.callApiToAddData(this.newEmployee).subscribe();
}
closeAdd(){
  this.icardservice.closeManageCard();
}
}

