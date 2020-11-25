import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListBusesSearchService {

  constructor(private httpClient : HttpClient) { }
  public GetListSchedule(){
    return this.httpClient.get('http://localhost:3000/schedule');
  }
}
