import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientVital } from '../CustomDataModels/PatientVital';
@Injectable({
  providedIn: 'root'
})
export class ConnectToAlertControllerService {

  constructor(private httpClient : HttpClient) { }

  //post request -send mail(alert)
  sendMail(patientVital:PatientVital[]):Observable<any>{
    console.log("Inside sendMail");
    console.log(patientVital);

    return  this.httpClient.post("http://localhost:5000/api/VitalsAlert", JSON.stringify(patientVital),{headers:{'Content-Type': 'application/json'}});
  }

}
