import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-schedule-of-route-and-agency',
  templateUrl: './list-schedule-of-route-and-agency.component.html',
  styleUrls: ['./list-schedule-of-route-and-agency.component.css']
})
export class ListScheduleOfRouteAndAgencyComponent implements OnInit {

  constructor() { }

  listSchedule : any
 
  ngOnInit(): void {
    // console.log("vao day r")
    // this.listSchedule = this.transfereService.getData()
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
