import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListAgencysService } from './list-agencys.service';
import { Router } from '@angular/router';
// import { TransfereService } from '../../services/transfere.service';

@Component({
  selector: 'app-list-agencys',
  templateUrl: './list-agencys.component.html',
  styleUrls: ['./list-agencys.component.css']
})
export class ListAgencysComponent implements OnInit {

  listAgency : any;

  constructor(private httpClient : HttpClient, private listAgencysService : ListAgencysService, private router : Router ) { }

  ngOnInit(): void {  
    this.listAgencysService.GetListAgency().subscribe(data => {
      this.listAgency = data;
      // console.log(this.listAgency)
    })
  }

}
