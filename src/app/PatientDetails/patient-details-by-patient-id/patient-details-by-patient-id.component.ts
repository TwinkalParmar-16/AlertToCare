import { Component, OnInit } from '@angular/core';
import {ConnectToOccupancyManagementControllerService } from '../../PatientServices/connect-to-occupancy-management-controller.service';
import { ICUId } from '../../CustomDataModels/ICUId';
import { PatientModel } from '../../CustomDataModels/PatientModel';
@Component({
  selector: 'app-patient-details-by-patient-id',
  templateUrl: './patient-details-by-patient-id.component.html',
  styleUrls: ['./patient-details-by-patient-id.component.css']
})
export class PatientDetailsByPatientIdComponent implements OnInit {

  public Patient:PatientModel;
  public currentPatientId:ICUId;
  constructor(private connectToOccupancyControllerService:ConnectToOccupancyManagementControllerService) { }

  ngOnInit(): void {
  }
  public getCurrentId(id:ICUId)
  {
     //console.log("Inside getCurrentId");
     this.currentPatientId=id;
     if(this.CheckPatientId(this.currentPatientId))
     {
       alert("Patient Id can not be empty!!");
     }
     //console.log(this.currentIcuId);
     this.getPatientById(this.currentPatientId);
  }
  public CheckPatientId(id):Boolean
  {
    if(!id)
    return true;
    return false;
  }

  public getPatientById(PatientId:ICUId){
    console.log(PatientId);
    this.connectToOccupancyControllerService.getPatientDetailWithPatientId(PatientId)
    .subscribe(
      data=>{
      this.Patient=data;
      console.log(data);
      if(this.Patient.id==0)
      {
        alert("Patient Id "+PatientId+" does not exists!")
      }
    }
        )

  }
}
