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
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id1 : " + id)
    this.listBusesService.GetSchedule(id).subscribe(data => {
      this.listSchedule = data;
      console.log(this.listSchedule)
    })
  }

}
