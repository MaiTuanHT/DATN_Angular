import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListBusesService {

  constructor(private httpClient : HttpClient) { }

  // listSchedule : any
   public GetSchedule(id){
     console.log("da vao day")
    return this.httpClient.get(`http://localhost:3000/schedules/${id}`);
    // console.log(this.listSchedule)
  }

  public GetScheduleForPageRoute(agencyID , startLocaton , stopLocation){
    return this.httpClient.get(`http://localhost:3000/schedules/agency-route/${agencyID}/${startLocaton}/${stopLocation}`);
    // console.log(this.listSchedule)
  }

}
