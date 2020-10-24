import { ConnectToOccupancyManagementControllerService } from './../../PatientServices/connect-to-occupancy-management-controller.service';
import { Component, OnInit } from '@angular/core';
import { ICUId } from '../../CustomDataModels/ICUId';
import { Message } from '../../CustomDataModels/Message';
@Component({
  selector: 'app-discharge-patient',
  templateUrl: './discharge-patient.component.html',
  styleUrls: ['./discharge-patient.component.css']
})
export class DischargePatientComponent implements OnInit {

 
  public currentId:ICUId;
  public message:Message;
  constructor(private connectToPatientControllerService:ConnectToOccupancyManagementControllerService) { }


  ngOnInit(): void {
  }

  public getCurrentId(id:ICUId)
  {
     this.currentId=id;
     if(!this.currentId)
      {
          alert("Patient Id can not be empty!!");
      }
     this.DeletePatient(this.currentId);
  }

  public DeletePatient(PatientId:ICUId){
    
    this.connectToPatientControllerService.dischargePatient(PatientId)
    .subscribe(
      data=>{
        
        this.message=data;
        console.log(data);
        alert(this.message.messages);
      }
    )
    
  }

}
