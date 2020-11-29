import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookTicketService {

  constructor(private httpClient : HttpClient) { }
  
  public GetSchedule(id){
    return this.httpClient.get(`http://localhost:3000/schedules/findone/${id}`);
  }

  public Ticket(fullName, email, phone, scheduleID , seat){
    console.log(fullName)
    return this.httpClient.post('http://localhost:3000/tickets/',{
      fullName,
      email,
      phone,
      scheduleID,
      seat
    },httpOptions)
  }

}
