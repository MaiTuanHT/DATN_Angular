import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // listScheduleSearch : any

  constructor(private httpClient : HttpClient) { }
  public GetSchedule(startLocation , stopLocation){
    return this.httpClient.get(`http://localhost:3000/schedules/many/?startLocation=${startLocation}&stopLocation=${stopLocation}`);
  }
}
