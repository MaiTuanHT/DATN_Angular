import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListAgencysService {

  constructor(private httpClient : HttpClient) { }

  public GetListAgency(){
    return this.httpClient.get('http://localhost:3000/agencys');
  }
  public GetAgency(agencyID : any){
    return this.httpClient.get(`http://localhost:3000/agencys/?agency=${agencyID}`);
  }

  public GetRateAgency(agencyID : any){
    return this.httpClient.get(`http://localhost:3000/rates/agency/?agencyID=${agencyID}`);
  }

}
