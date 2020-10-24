import { Component, OnInit } from '@angular/core';
import {ConnectToOccupancyManagementControllerService } from '../../PatientServices/connect-to-occupancy-management-controller.service';
import { ICUId } from '../../CustomDataModels/ICUId';
import { PatientModel } from '../../CustomDataModels/PatientModel';
@Component({
  selector: 'app-patient-details-by-icu-id',
  templateUrl: './patient-details-by-icu-id.component.html',
  styleUrls: ['./patient-details-by-icu-id.component.css']
})
export class PatientDetailsByIcuIdComponent implements OnInit {

  public currentPatient:PatientModel[];
  public currentPatientIcuId:ICUId;
  constructor(private connectToOccupancyControllerService:ConnectToOccupancyManagementControllerService) { }

  ngOnInit(): void {
  }
  public getCurrentId(id:ICUId)
  {
    
     //console.log("Inside getCurrentId");
     this.currentPatientIcuId=id;

     if(!this.currentPatientIcuId)
     {
       alert("Icu Id can not be empty!!");
     }
     //console.log(this.currentIcuId);
     this.getIcuById(this.currentPatientIcuId);
  }

  public getIcuById(PatientIcuId:ICUId){
    console.log(PatientIcuId);
    this.connectToOccupancyControllerService.getPatientDetailWithIcuId(PatientIcuId)
    .subscribe(
      data=>{
      this.currentPatient=data;
      if(this.currentPatient.length==0)
      {
        alert("ICU ID "+PatientIcuId+" not present");
      }
      }
    )

  }

 
}
