import { Component } from '@angular/core';
import { IcardComponent } from 'src/app/icard/icard.component';
import { IcardType } from 'src/app/Interface/icardType.model';
import { icardserviceService } from 'src/app/Services/icardservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  editedEmployee :IcardType[]=[];
  id = this.icard.count;
constructor(private icardservice:icardserviceService,private icard:IcardComponent){}

ngOnInit(){
  this.icardservice.callApiToAddData(this.editedEmployee[this.id],this.editedEmployee[this.id].id)
  console.log(this.id);
  
}
}
