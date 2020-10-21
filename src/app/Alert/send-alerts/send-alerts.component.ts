import { Component, OnInit } from '@angular/core';
import { ConnectToAlertControllerService} from '../../AlertService/connect-to-alert-controller.service';
import { PatientVital} from '../../CustomDataModels/PatientVital';
import { Message} from '../../CustomDataModels/Message';

@Component({
  selector: 'app-send-alerts',
  templateUrl: './send-alerts.component.html',
  styleUrls: ['./send-alerts.component.css']
})
export class SendAlertsComponent implements OnInit {

  constructor(private connectToAlertControllerService:ConnectToAlertControllerService) { }
  public message:Message;
  ngOnInit(): void {

    
  }

  public getBody(patientId,bpm,spo2,rr){
     
    var patientVitals=new PatientVital();
    //patientVitals.id=21;
    patientVitals.id=parseInt(patientId);
    //patientVitals.Vitals=[23,23,23];
    patientVitals.Vitals=[parseInt(bpm),parseInt(spo2),parseInt(rr)];
    var alertList:PatientVital[];
    alertList=[patientVitals];
    console.log(alertList);
    //alertList.push(patientVitals);
    //PatientVital alertList=[patientVitals];
    this.connectToAlertControllerService.sendMail(alertList)
    .subscribe(
      data=>{
        this.message=data;
      }
    )

  }


}
