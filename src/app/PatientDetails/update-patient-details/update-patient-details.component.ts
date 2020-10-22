import { Component, OnInit } from '@angular/core';
import {ConnectToOccupancyManagementControllerService} from '../../PatientServices/connect-to-occupancy-management-controller.service'
import { ICUId } from 'src/app/CustomDataModels/ICUId';
import { PatientModelWithoutId } from 'src/app/CustomDataModels/PatientModelWithoutId';
import { Message } from '../../CustomDataModels/Message';
@Component({
  selector: 'app-update-patient-details',
  templateUrl: './update-patient-details.component.html',
  styleUrls: ['./update-patient-details.component.css']
})
export class UpdatePatientDetailsComponent implements OnInit {

  public message:Message;
  constructor(private connectToPatientControllerService:ConnectToOccupancyManagementControllerService) { }

  ngOnInit(): void {
  }
  
  public getBody(patientid,name,age,bloodgroup,address,icuid,bednumber){
   
    
    var updatePatientDetails=new PatientModelWithoutId();
    //updateIcu.numberOfBeds=101;
    //updateIcu.layout="Z";
  updatePatientDetails.name=name;
  updatePatientDetails.age=parseInt(age);
  updatePatientDetails.bloodGroup=bloodgroup;
  updatePatientDetails.address=address;
  updatePatientDetails.IcuId= parseInt(icuid);
  updatePatientDetails.bedNumber=parseInt(bednumber);
  var patient = new ICUId();
  patient.id = parseInt(patientid);
  console.log(patient);
    this.connectToPatientControllerService.updatePatientDetailsWithIcuId(patient,updatePatientDetails)
    .subscribe(

      data=>{
        this.message=data;
      }
    )
  }
}

