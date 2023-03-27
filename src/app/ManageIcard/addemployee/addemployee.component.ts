import { Component } from '@angular/core';
import { Form } from '@angular/forms';
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

ngOnInit(){
  
}
AddNewEmployeeToApi(newEmpData:HTMLFormElement){
  
  console.log(this.newEmployee);
  this.icardservice.callApiToAddData(this.newEmployee).subscribe();
}
  closeAdd(){
    this.icardservice.closeManageCard();
}
}

