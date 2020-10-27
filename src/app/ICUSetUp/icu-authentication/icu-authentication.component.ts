import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-icu-authentication',
  templateUrl: './icu-authentication.component.html',
  styleUrls: ['./icu-authentication.component.css']
})
export class IcuAuthenticationComponent implements OnInit {

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
        this.redirectToIcuSetUpHomePage();
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

  private redirectToIcuSetUpHomePage(){

    this.router.navigate(['IcuSetUpHomePage'])
  }
}
