import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IcardType } from '../Interface/icardType.model';

@Injectable({
  providedIn: 'root'
})
export class icardserviceService implements OnInit {

  apiUrl ='http://localhost:3000/employee';

  editemployee = new BehaviorSubject<boolean>(false);
  addemployee  = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }
  // employeeData !: IcardType;
  ngOnInit(){
   // this.callApiForData();
    }

  callApiForData(){ 
   return this.http.get<IcardType[]>(this.apiUrl)
   }
  callApiToUpdateData(empEditedDetails:IcardType){ 
    return this.http.put<IcardType[]>(this.apiUrl+'/'+empEditedDetails.id,empEditedDetails);
   }
  callApiToDeleteData(empToBeDeleted:IcardType){
    return this.http.delete<IcardType>(this.apiUrl+'/'+empToBeDeleted.id)
   }

  callApiToAddData(newEmployee:IcardType){
    return this.http.post<IcardType>(this.apiUrl,newEmployee);
   }

   closeManageCard(){
    this.addemployee.next(false);
    this.editemployee.next(false);
   }
}
