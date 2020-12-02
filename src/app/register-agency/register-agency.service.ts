import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class RegisterAgencyService {

  constructor(private httpClient : HttpClient) { }

  public Agency(nameAgency, phoneNumber, discription , utilities,policy){
    // console.log(fullName)
    return this.httpClient.post('http://localhost:3000/agencys/',{
      nameAgency, phoneNumber, discription , utilities,policy
    },httpOptions)
  }

}
