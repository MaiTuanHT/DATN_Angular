import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private httpClient : HttpClient) { }

  public Rate(quality, service, agencyID , userID){
    // console.log(fullName)
    return this.httpClient.post('http://localhost:3000/rates/',{
      quality,
      service,
      agencyID,
      userID
    },httpOptions)
  }

}
