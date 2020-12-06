import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListRoutesService } from './list-routes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-routes',
  templateUrl: './list-routes.component.html',
  styleUrls: ['./list-routes.component.css']
})
export class ListRoutesComponent implements OnInit {
  listAgencyRoute : any;
  listKey : any;
  constructor(private httpClient : HttpClient, private listRoutesService : ListRoutesService, private router : Router) { }

  async ngOnInit() {
    this.listRoutesService.getList().subscribe(data => {
      this.listAgencyRoute = data;

      this.listKey = Object.keys(this.listAgencyRoute)

      this.listKey.forEach(key => {
        this.listAgencyRoute[key].forEach(each => {
          console.log(each.agencyID.nameAf)
        })
      });
    } , error => {
      alert(error.error.name)
    })
  }

 }
