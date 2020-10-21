import { Component, OnInit } from '@angular/core';
import { ConnectToIcuControllerService } from '../../IcuServices/connect-to-icu-controller.service';
import { ICUModel } from '../../CustomDataModels/ICUModel';

@Component({
  selector: 'app-all-icus-details',
  templateUrl: './all-icus-details.component.html',
  styleUrls: ['./all-icus-details.component.css']
})
export class AllIcusDetailsComponent implements OnInit {

  public icuList:ICUModel[];
  constructor(private connectToIcuControllerService:ConnectToIcuControllerService) {

  }
  ngOnInit(): void {

     //get all icus
    this.connectToIcuControllerService.getAllIcusDetails()
    .subscribe(
      data=>{
            this.icuList=data;
      }
    );     
  }


  
  
  

}
