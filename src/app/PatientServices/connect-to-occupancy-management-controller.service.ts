import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICUId } from '../CustomDataModels/ICUId';
import {PatientModelWithoutId} from '../CustomDataModels/PatientModelWithoutId'
@Injectable({
  providedIn: 'root'
})
export class ConnectToOccupancyManagementControllerService {

  constructor(private httpClient : HttpClient) { }

  getPatientDetailWithIcuId(icuId:ICUId):Observable<any>{
    return this.httpClient.get("http://localhost:5000/api/OccupancyManagement/"+icuId);
  }


  getPatientDetailWithPatientId(icuId:ICUId):Observable<any>{
    return this.httpClient.get("http://localhost:5000/api/OccupancyManagement/GetPatientById/"+icuId);
  }

  dischargePatient(icuId:ICUId):Observable<any>{
    return this.httpClient.delete("http://localhost:5000/api/OccupancyManagement/"+icuId);
  }

  admitPatient(patient:PatientModelWithoutId):Observable<any>{
    return  this.httpClient.post("http://localhost:5000/api/OccupancyManagement/"+patient.IcuId, JSON.stringify(patient),{headers:{'Content-Type': 'application/json'}});
  }

  updatePatientDetailsWithIcuId(patientId:ICUId,body:PatientModelWithoutId):Observable<any>{
    console.log(body);
    return this.httpClient.put("http://localhost:5000/api/OccupancyManagement/"+patientId.id,JSON.stringify(body),{headers:{'Content-Type': 'application/json'}});
  }
}


