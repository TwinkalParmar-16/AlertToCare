import { Component, OnInit } from '@angular/core';
import { ConnectToIcuControllerService} from '../../IcuServices/connect-to-icu-controller.service';
import { ICUId } from '../../CustomDataModels/ICUId';
import { ICUModel } from '../../CustomDataModels/ICUModel';

@Component({
  selector: 'app-get-single-icu-details',
  templateUrl: './get-single-icu-details.component.html',
  styleUrls: ['./get-single-icu-details.component.css']
})
export class GetSingleIcuDetailsComponent implements OnInit {

  public currentIcu:ICUModel;
  public currentIcuId:ICUId;
  constructor(private connectToIcuControllerService:ConnectToIcuControllerService) { }
  ngOnInit(): void {
    //var icuid=new ICUId();
    //icuid.id=240;
    //this.currentIcu.id=1;
  /*this.connectToIcuControllerService.getIcuDetailWithIcuId(this.currentIcuId)
    .subscribe(
      data=>{
      this.currentIcu=data;
      }
    )*/
    console.log(this.currentIcuId);
  }
  public getCurrentId(id:ICUId)
  {
     //console.log("Inside getCurrentId");
     this.currentIcuId=id;
     //console.log(this.currentIcuId);
     this.getIcuById(this.currentIcuId);
  }

  public getIcuById(IcuId:ICUId){
    console.log(IcuId);
    this.connectToIcuControllerService.getIcuDetailWithIcuId(IcuId)
    .subscribe(
      data=>{
      this.currentIcu=data;
      if(this.currentIcu.id==0)
      {
        alert("ICU : "+IcuId+" Not Registred!");
      }
      }
    )

  }

 

}
