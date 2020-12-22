import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { DecodeJwtService } from 'src/app/helpers/decode-jwt.service';
import {TicketManagementService} from './ticket-management.service'

import{TicketComponent} from '../ticket/ticket.component'

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

  constructor(private ticketManagementService: TicketManagementService,
    private router : Router,
    private dialog: MatDialog,
    private decodeJwtService: DecodeJwtService ) { }

  listTicket : any
  user: any
  async ngOnInit() {
    this.user = await this.decodeJwtService.getDecodedAccessToken()
  }
  async openDialog(user) {
    if(!this.searchForm.value.phoneNumber || !this.searchForm.value.dateStart){
      alert("Xin vui lòng điền đầy đủ thông tin")
    }else{
      if(this.searchForm.value){
        console.log(this.searchForm.value)
        await this.ticketManagementService.GetTicket(this.searchForm.value.phoneNumber, 
          this.searchForm.value.dateStart).subscribe(data=>{
            this.listTicket = data;

            const tickets = this.listTicket
            console.log("tickets : " , tickets)
            const dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = true
            dialogConfig.autoFocus = true
           
            dialogConfig.width = "1000px"
            dialogConfig.data = {
              tickets
            }
            console.log( "data: ",dialogConfig.data)
            if(!user){
              alert("Ban Can Co Tai Khoan Dat Ve")
              this.router.navigateByUrl('singin')
            }
            else this.dialog.open(TicketComponent, dialogConfig);

            console.log("list ticket : " ,this.listTicket)
          }, error=>{
            alert(error.error.name)
        })

      }

    }

  }
}
