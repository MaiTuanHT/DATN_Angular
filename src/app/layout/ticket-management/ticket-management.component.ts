import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import {TicketManagementService} from './ticket-management.service'

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.css']
})
export class TicketManagementComponent implements OnInit {

  searchForm = new FormGroup({
    phoneNumber : new FormControl(''),
    dateStart : new FormControl('')
  });

  constructor(private ticketManagementService: TicketManagementService ) { }

  tickets : any
   a = 0;
  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.searchForm.value.phoneNumber)
    console.log(this.searchForm.value.dateStart)
    this.ticketManagementService.GetTicket(this.searchForm.value.phoneNumber, 
      this.searchForm.value.dateStart).subscribe(data=>{
        this.tickets = data;
        console.log(this.tickets)
        this.a ++ ;
      })
  }

}
