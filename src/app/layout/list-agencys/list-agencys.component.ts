import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListAgencysService } from './list-agencys.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { RateComponent } from '../rate/rate.component';
import { DecodeJwtService } from 'src/app/helpers/decode-jwt.service';



@Component({
  selector: 'app-list-agencys',
  templateUrl:'./list-agencys.component.html',
  styleUrls: ['./list-agencys.component.css']
})
export class ListAgencysComponent implements OnInit {

  listAgency : any;
  user : any

  constructor(private httpClient : HttpClient, 
    private listAgencysService : ListAgencysService,
     private router : Router ,
     private dialog: MatDialog,
     private decodeJwtService: DecodeJwtService
     ) { }

  async ngOnInit() { 
  
    this.user = await this.decodeJwtService.getDecodedAccessToken()
    // console.log(this.user)

    await this.listAgencysService.GetListAgency().subscribe(data => {
      this.listAgency = data;
      // console.log(this.listAgency)
    })

    
  }


  openDialog(agency ,user) {

    const dialogConfig = new MatDialogConfig();

    // const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    // if(data !== null || data !== "undefined")
    //   dialogConfig.data = data
    dialogConfig.height = "300px"
    dialogConfig.width = "500px"
    dialogConfig.data = {
      agency,
      user,
    }
    this.dialog.open(RateComponent, dialogConfig);
    // dialogConfig.position = {
    //   'top': '50%',
    //   'left' : '50%'
    // }
  }

}
