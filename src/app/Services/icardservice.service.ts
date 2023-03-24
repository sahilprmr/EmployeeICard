import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IcardType } from '../Interface/icardType.model';

@Injectable({
  providedIn: 'root'
})
export class icardserviceService implements OnInit {

  apiUrl ='https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';
  //employeeData !: IcardType;
  
  constructor(private http:HttpClient) { }

  ngOnInit(){
   // this.callApiForData();
    }

  callApiForData(){ 
   return this.http.get<IcardType[]>(this.apiUrl)

   }
  callApiToUpdateDatat(){  }
  callApiToDeleteData(){ }
  callApiToAddData(){ }


}
