import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListBusesService } from './list-buses.service';


@Component({
  selector: 'app-list-buses',
  templateUrl: './list-buses.component.html',
  styleUrls: ['./list-buses.component.css']
})
export class ListBusesComponent implements OnInit {

  listSchedule : any;

  constructor(private route: ActivatedRoute, private listBusesService: ListBusesService) { }
  
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    const route = this.route.snapshot.paramMap.get('route')

    if(route && id){
      const vt = route.indexOf('-');
      const startLocation = route.substr(0 , vt)
      const stopLocation = route.substr(vt+1)
      await this.listBusesService.GetScheduleForPageRoute(id,startLocation,stopLocation).subscribe(data=>{
        this.listSchedule = data
      })
       
    }

    if(id && !route){
      this.listBusesService.GetSchedule(id).subscribe(data => {
      this.listSchedule = data;
      console.log(this.listSchedule)
    })
    }
  }

}
