import { Component, OnInit } from '@angular/core';
import { ConnectToIcuControllerService} from '../../IcuServices/connect-to-icu-controller.service';
import { ICUId } from '../../CustomDataModels/ICUId';
import { Message } from '../../CustomDataModels/Message';

@Component({
  selector: 'app-delete-icu-details',
  templateUrl: './delete-icu-details.component.html',
  styleUrls: ['./delete-icu-details.component.css']
})
export class DeleteIcuDetailsComponent implements OnInit {

  public currentIcuId:ICUId;
  public message:Message;
  constructor(private connectToIcuControllerService:ConnectToIcuControllerService) { }


  ngOnInit(): void {
  }

  public getCurrentId(id:ICUId)
  {
     this.currentIcuId=id;
     if(!this.currentIcuId)
     {
       alert("ICU Id can not be empty!");
     }
     this.DeleteIcuById(this.currentIcuId);
  }

  public DeleteIcuById(icuId:ICUId){
    
    this.connectToIcuControllerService.deleteIcuWithIcuId(icuId)
    .subscribe(
      data=>{

        this.message=data;
        console.log(data);
        alert(this.message.messages);
      }
    )
    
  }

}
