import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketManagementService {

  constructor(private httpClient : HttpClient) { }
  public GetTicket(phone , date){
    try {
      return this.httpClient.get(`http://localhost:3000/tickets/many/${phone}/${date}`);
    } catch(error) {
      console.log(error)
    }
  }
}
