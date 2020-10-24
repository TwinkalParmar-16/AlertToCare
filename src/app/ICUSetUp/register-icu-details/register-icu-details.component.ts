import { Component, OnInit } from '@angular/core';
import { ConnectToIcuControllerService } from '../../IcuServices/connect-to-icu-controller.service';
import { ICUModel } from '../../CustomDataModels/ICUModel';
import { Message } from '../../CustomDataModels/Message';
import { ICUModelWithoutId } from 'src/app/CustomDataModels/ICUModelWithoutId';

@Component({
  selector: 'app-register-icu-details',
  templateUrl: './register-icu-details.component.html',
  styleUrls: ['./register-icu-details.component.css']
})
export class RegisterIcuDetailsComponent implements OnInit {

  public icuModel: ICUModel;
  public message:Message;
  constructor(private connectToIcuControllerService:ConnectToIcuControllerService) { }
  
  ngOnInit(): void {
  }

  public getBody(noOfBeds,layout){
   
    var icu=new ICUModelWithoutId();
    //icu.numberOfBeds=4;
    //icu.layout="C";
    console.log(noOfBeds);
    console.log(layout);

    if(!noOfBeds)
    {
      alert("No of beds can not be empty!!");
    }
    if(layout=="")
    {
      alert("Layout can not be empty!!");
    }

    icu.numberOfBeds=parseInt(noOfBeds);
    icu.layout=layout;
    this.connectToIcuControllerService.registerICU(icu)
    .subscribe(
      data=>{
        this.message=data;
        alert(this.message.messages);
      }
    )
  }



}
