import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IcardComponent } from 'src/app/icard/icard.component';
import { IcardType } from 'src/app/Interface/icardType.model';
import { icardserviceService } from 'src/app/Services/icardservice.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent {

  constructor(private icardservice:icardserviceService,private icard:IcardComponent,private http:HttpClient){}
  empToBeEdited!:IcardType;
  id = this.icard.count;

  SaveEditedForm(){
    this.icardservice.callApiToUpdateData(this.empToBeEdited).subscribe(res=>{
      console.log(this.empToBeEdited);
    });
  }
  ngOnInit(){
    this.empToBeEdited = this.icard.employees[this.id];   
    console.log(this.empToBeEdited);
  }
  
  closeEdit(){
    this.icardservice.closeManageCard();
  }
}
