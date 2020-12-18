import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TransfereService} from '../../services/transfere.service'
@Component({
  selector: 'app-list-buses-search',
  templateUrl: './list-buses-search.component.html',
  styleUrls: ['./list-buses-search.component.css']
})
export class ListBusesSearchComponent implements OnInit {

  constructor(private transfereService : TransfereService, private router: Router) { }
  listSchedule : any
 
  ngOnInit(): void {
    console.log("vao day r")
    this.listSchedule = this.transfereService.getData()
    this.priceAscending()
    this.priceDecrease()
    this.qualityAcending()
    this.qualityDecrease()
  }

  priceAscending(){
    this.listSchedule = this.listSchedule.sort((a,b)=>a.price - b.price)
    console.log(this.listSchedule)
  }

  priceDecrease(){
    this.listSchedule = this.listSchedule.sort((a,b)=>b.price - a.price)
    console.log(this.listSchedule)
  }

  qualityAcending(){
    this.listSchedule = this.listSchedule.sort((a,b)=>a.agencyID.scoreRate - b.agencyID.scoreRate)
  }

  qualityDecrease(){
    this.listSchedule = this.listSchedule.sort((a,b)=>b.agencyID.scoreRate - a.agencyID.scoreRate)
  }

}
