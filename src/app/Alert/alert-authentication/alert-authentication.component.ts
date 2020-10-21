import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-alert-authentication',
  templateUrl: './alert-authentication.component.html',
  styleUrls: ['./alert-authentication.component.css']
})
export class AlertAuthenticationComponent implements OnInit {

  private validPassword:string;
  private isAllowed:boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public checkPin(pin: string)
  {
     this.validPassword="AdminAlert@123";
     if(pin === this.validPassword)
     {
        this.redirectToAlertHomePage();
        console.log("valid pin");
        alert("Authorzied User!");
        this.isAllowed=true;
     }
     else
     {
     this.isAllowed=false;
     console.log("invalid pin");
     alert("Unauthorzied User!");
     }
  }

  private redirectToAlertHomePage(){

    this.router.navigate(['AlertHomePage'])
  }

}
