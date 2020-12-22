import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListScheduleOfRouteService } from '../list-schedule-of-route/list-schedule-of-route.service';

@Component({
  selector: 'app-list-schedule-of-route',
  templateUrl: './list-schedule-of-route.component.html',
  styleUrls: ['./list-schedule-of-route.component.css']
})
export class ListScheduleOfRouteComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private listScheduleOfRouteService: ListScheduleOfRouteService) { }

  listSchedule : any

  async ngOnInit(){
    const key = this.route.snapshot.paramMap.get('key');
    await this.listScheduleOfRouteService.GetScheduleKey(key).subscribe(data=>{
      this.listSchedule = data
    }, error=>{
      alert(error.error.name)
    })
    if(this.listSchedule.length> 1){
    this.priceAscending()
    this.priceDecrease()
    this.qualityAcending()
    this.qualityDecrease()
    }
    
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
