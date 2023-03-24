import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IcardType } from '../Interface/icardType.model';

@Injectable({
  providedIn: 'root'
})
export class icardserviceService implements OnInit {

  apiUrl ='https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';
  
  
  constructor(private http:HttpClient) { }
  // employeeData !: IcardType;
  ngOnInit(){
   // this.callApiForData();
    }

  callApiForData(){ 
   return this.http.get<IcardType[]>(this.apiUrl)

   }
  callApiToUpdateDatat(){  }
  callApiToDeleteData(){ }
  callApiToAddData(newEmployee:IcardType,id:number){
    newEmployee.id = id;
    return this.http.post<IcardType[]>(this.apiUrl,newEmployee);
   }


}
