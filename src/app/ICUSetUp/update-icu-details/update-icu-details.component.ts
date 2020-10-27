import { Component, OnInit } from '@angular/core';
import { ICUId } from 'src/app/CustomDataModels/ICUId';
import { ICUModelWithoutId } from 'src/app/CustomDataModels/ICUModelWithoutId';
import { ICUModel } from '../../CustomDataModels/ICUModel';
import { Message } from '../../CustomDataModels/Message';
import { ConnectToIcuControllerService } from '../../IcuServices/connect-to-icu-controller.service';


@Component({
  selector: 'app-update-icu-details',
  templateUrl: './update-icu-details.component.html',
  styleUrls: ['./update-icu-details.component.css']
})
export class UpdateIcuDetailsComponent implements OnInit {

  public message:Message;
  constructor(private connectToIcuControllerService:ConnectToIcuControllerService) { }

  ngOnInit(): void {
  }
  
  public getBody(noOfBeds,layout,id){
   
    if(this.CheckInputFields(noOfBeds,layout,id))
    {
      alert("Fields can not be empty!!");
    }
    
    var updateIcu=new ICUModelWithoutId();
    //updateIcu.numberOfBeds=101;
    //updateIcu.layout="Z";
    updateIcu.numberOfBeds=parseInt(noOfBeds);
    updateIcu.layout=layout;
    var icuId=new ICUId();
    //icuId.id=45;
    icuId.id=parseInt(id);
    console.log(id);
    this.connectToIcuControllerService.updateIcuDetailsWithIcuId(icuId,updateIcu)
    .subscribe(

      data=>{
        this.message=data;
        alert(this.message.messages);
      }
    )
  }

  public CheckInputFields(noOfBeds,layout,id):Boolean
  {
    if(!noOfBeds || layout == "" || !id)
    return true;
    return false;
  }
}
