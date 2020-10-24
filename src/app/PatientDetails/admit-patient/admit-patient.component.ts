import { ICUModel } from './../../CustomDataModels/ICUModel';
import { Component, OnInit } from '@angular/core';
import { ConnectToOccupancyManagementControllerService } from '../../PatientServices/connect-to-occupancy-management-controller.service';
import { PatientModel } from '../../CustomDataModels/PatientModel';
import { Message } from '../../CustomDataModels/Message';
import {ICUId} from '../../CustomDataModels/ICUId'
import { PatientModelWithoutId } from 'src/app/CustomDataModels/PatientModelWithoutId';
@Component({
  selector: 'app-admit-patient',
  templateUrl: './admit-patient.component.html',
  styleUrls: ['./admit-patient.component.css']
})
export class AdmitPatientComponent implements OnInit {

  
  public patientModel: PatientModel;
  public icuId : ICUId;
  public message:Message;
  constructor(private connectToPatientControllerService:ConnectToOccupancyManagementControllerService) { }
  
  ngOnInit(): void {
  }

  public getBody(icuId,name,age,bloodgroup,address,bednumber){
   
   console.log(icuId+" "+name+" "+age+" "+bloodgroup+" "+address+" "+bednumber);

   if(!icuId || name=="" || !age || bloodgroup==" " || address=="" || !bednumber)
   {
     alert("Fields can not be empty!!");
   }
    
   else
   {
  var patient=new PatientModelWithoutId();
  patient.IcuId = icuId;
  patient.name = name;
  patient.age = parseInt(age);
  patient.bloodGroup=bloodgroup;
  patient.address = address;
  patient.bedNumber= parseInt(bednumber);

    this.connectToPatientControllerService.admitPatient(patient)
    .subscribe(
      data=>{
        this.message=data;
        alert(this.message.messages);
      }
    )
   }
  }



}
