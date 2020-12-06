import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListAgencysService } from './list-agencys.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { RateComponent } from '../rate/rate.component';
import { DecodeJwtService } from 'src/app/helpers/decode-jwt.service';
import { DetailAgencyComponent } from '../detail-agency/detail-agency.component';



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

    await this.listAgencysService.GetListAgency().subscribe(data => {
      this.listAgency = data;
    }, error=>{
      alert(error.error.name)
    })

    
  }
  openDialog(agency ,user) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    // dialogConfig.height = "300px"
    dialogConfig.width = "500px"
    dialogConfig.data = {
      agency,
      user,
    }
    if(!user){
      alert("Ban Can Co Tai Khoan De Danh Gia")
      this.router.navigateByUrl('singin')
    }
    else this.dialog.open(RateComponent, dialogConfig);
  }

  openDialogDetail(agency){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    // dialogConfig.height = "300px"
    dialogConfig.width = "500px"
    dialogConfig.data = {
      agency
    }
    this.dialog.open(DetailAgencyComponent, dialogConfig);
  }

}
