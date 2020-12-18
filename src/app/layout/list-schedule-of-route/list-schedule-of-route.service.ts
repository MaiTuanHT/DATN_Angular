import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListScheduleOfRouteService {

  constructor(private httpClient : HttpClient) { }

  public GetScheduleKey(key){
    return this.httpClient.get(`http://localhost:3000/schedules/key/${key}`);
    // console.log(this.listSchedule)
  }

}
