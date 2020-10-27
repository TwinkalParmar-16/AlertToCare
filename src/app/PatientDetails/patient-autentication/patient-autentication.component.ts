import { PatientDetailsHomePageComponent } from './../patient-details-home-page/patient-details-home-page.component';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-patient-autentication',
  templateUrl: './patient-autentication.component.html',
  styleUrls: ['./patient-autentication.component.css']
})
export class PatientAutenticationComponent implements OnInit {

  private validPassword:string;
  public isAllowed:boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public checkPin(pin: string):Boolean
  {
     this.validPassword="Admin@123";
     if(pin === this.validPassword)
     {
        this.redirectToPatientDetailsHomePage();
        console.log("valid pin");
        alert("Authorzied User!");
        this.isAllowed=true;
        return true;
     }
     else
     {
     this.isAllowed=false;
     console.log("invalid pin");
     alert("Unauthorzied User!");
     }
     return false;
  }

  private redirectToPatientDetailsHomePage(){

    this.router.navigate(['PatientDetailsHomePage'])
  }
}
