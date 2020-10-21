import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertToCareHomePageComponent} from './alert-to-care-home-page/alert-to-care-home-page.component';
import { IcuAuthenticationComponent} from '../app/ICUSetUp/icu-authentication/icu-authentication.component';
import {  IcuSetUpHomePageComponent} from '../app/ICUSetUp/icu-set-up-home-page/icu-set-up-home-page.component';
import  { NotFoundComponent } from './not-found/not-found.component';
import { AllIcusDetailsComponent} from '../app/ICUSetUp/all-icus-details/all-icus-details.component';
import { DeleteIcuDetailsComponent} from '../app/ICUSetUp/delete-icu-details/delete-icu-details.component';
import {RegisterIcuDetailsComponent} from '../app/ICUSetUp/register-icu-details/register-icu-details.component';
import {UpdateIcuDetailsComponent} from '../app/ICUSetUp/update-icu-details/update-icu-details.component';
import { GetSingleIcuDetailsComponent} from '../app/ICUSetUp/get-single-icu-details/get-single-icu-details.component';
const routes: Routes = [
  { 
    path: '',   
    redirectTo: '/alert-to-care', 
    pathMatch: 'full'
  },
  {
    path:'alert-to-care',
    component:AlertToCareHomePageComponent,
     children: [
      {
      path: 'Authentication', // child route path
      component: IcuAuthenticationComponent // child route component that the router renders
       },
       
      ] 
      

    },
    {
     
      path:'IcuSetUpHomePage',
      component:IcuSetUpHomePageComponent,
      children: [
        {
        path: 'AllIcus', // child route path
        component: AllIcusDetailsComponent // child route component that the router renders
         },
         {
           path:'UpdateIcuDetails',
           component:UpdateIcuDetailsComponent
         },
         {
           path:'DeleteIcu',
           component:DeleteIcuDetailsComponent
         },
         {
           path:'RegisterIcu',
           component:RegisterIcuDetailsComponent
         },
         {
           path:'GetSingleIcuDetail',
           component:GetSingleIcuDetailsComponent
         }
        ]  
    },
    {
      path:"**",
      component:NotFoundComponent

    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
