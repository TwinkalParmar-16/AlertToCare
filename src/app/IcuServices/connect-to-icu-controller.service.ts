import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICUId } from '../CustomDataModels/ICUId';
import { ICUModelWithoutId } from '../CustomDataModels/ICUModelWithoutId';

@Injectable({
  providedIn: 'root'
})
export class ConnectToIcuControllerService {

  constructor(private httpClient : HttpClient) { }

  //get All the icus deatails
  getAllIcusDetails():Observable<any>{
     console.log("Inside getallIcusDetails");
    return this.httpClient.get("http://localhost:5000/api/ICUConfig");
  }

  //get icu with icu id
  getIcuDetailWithIcuId(icuId:ICUId):Observable<any>{
    return this.httpClient.get("http://localhost:5000/api/ICUConfig/"+icuId);
  }

  //delete the ICU with given ICU id
  deleteIcuWithIcuId(icuId:ICUId):Observable<any>{
    return this.httpClient.delete("http://localhost:5000/api/ICUConfig/"+icuId);
  }

  //post-register ICU
  registerICU(currentIcu:ICUModelWithoutId):Observable<any>{
    console.log(currentIcu);
    return  this.httpClient.post("http://localhost:5000/api/ICUConfig/register", JSON.stringify(currentIcu),{headers:{'Content-Type': 'application/json'}});
  }

  //update the icu details with icu id
  updateIcuDetailsWithIcuId(icuId:ICUId,body:ICUModelWithoutId):Observable<any>{
    console.log(icuId);
    console.log(body);
    return this.httpClient.put("http://localhost:5000/api/ICUConfig/"+icuId.id,JSON.stringify(body),{headers:{'Content-Type': 'application/json'}});
  }


}
