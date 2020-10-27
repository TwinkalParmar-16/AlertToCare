import { PatientModel } from './CustomDataModels/PatientModel';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertToCareHomePageComponent } from './alert-to-care-home-page/alert-to-care-home-page.component';
import { IcuAuthenticationComponent } from './ICUSetUp/icu-authentication/icu-authentication.component';
import { IcuSetUpHomePageComponent } from './ICUSetUp/icu-set-up-home-page/icu-set-up-home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllIcusDetailsComponent } from './ICUSetUp/all-icus-details/all-icus-details.component';
import { RegisterIcuDetailsComponent } from './ICUSetUp/register-icu-details/register-icu-details.component';
import { DeleteIcuDetailsComponent } from './ICUSetUp/delete-icu-details/delete-icu-details.component';
import { UpdateIcuDetailsComponent } from './ICUSetUp/update-icu-details/update-icu-details.component';
import { RouterModule, Routes } from '@angular/router';


//connect to api
import { ConnectToIcuControllerService} from './IcuServices/connect-to-icu-controller.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertAuthenticationComponent } from './Alert/alert-authentication/alert-authentication.component';
import { AlertHomePageComponent } from './Alert/alert-home-page/alert-home-page.component';
import { SendAlertsComponent } from './Alert/send-alerts/send-alerts.component';
import { ConnectToAlertControllerService } from './AlertService/connect-to-alert-controller.service';
/// Patient Service
import { PatientDetailsHomePageComponent } from './PatientDetails/patient-details-home-page/patient-details-home-page.component';
import { PatientAutenticationComponent } from './PatientDetails/patient-autentication/patient-autentication.component';
import { PatientDetailsByIcuIdComponent } from './PatientDetails/patient-details-by-icu-id/patient-details-by-icu-id.component';
import { PatientDetailsByPatientIdComponent } from './PatientDetails/patient-details-by-patient-id/patient-details-by-patient-id.component';
import { AdmitPatientComponent } from './PatientDetails/admit-patient/admit-patient.component';
import { DischargePatientComponent } from './PatientDetails/discharge-patient/discharge-patient.component';
import { UpdatePatientDetailsComponent } from './PatientDetails/update-patient-details/update-patient-details.component';
import {ConnectToOccupancyManagementControllerService} from './PatientServices/connect-to-occupancy-management-controller.service';
//import { GetSingleIcuDetailsComponent } from './ICUSetUP/get-single-icu-details/get-single-icu-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertToCareHomePageComponent,
    IcuAuthenticationComponent,
    IcuSetUpHomePageComponent,
    NotFoundComponent,
    AllIcusDetailsComponent,
    RegisterIcuDetailsComponent,
    DeleteIcuDetailsComponent,
    UpdateIcuDetailsComponent,
    AlertAuthenticationComponent,
    AlertHomePageComponent,
    SendAlertsComponent,  PatientDetailsHomePageComponent,
    PatientAutenticationComponent,
    PatientDetailsByIcuIdComponent,
    PatientDetailsByPatientIdComponent,
    AdmitPatientComponent,
    DischargePatientComponent,
    UpdatePatientDetailsComponent
    //GetSingleIcuDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])  
  ],
  providers: [ConnectToIcuControllerService,ConnectToAlertControllerService,ConnectToOccupancyManagementControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
