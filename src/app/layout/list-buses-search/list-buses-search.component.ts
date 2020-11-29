import { Component, OnInit } from '@angular/core';
import {TransfereService} from '../../services/transfere.service'

@Component({
  selector: 'app-list-buses-search',
  templateUrl: './list-buses-search.component.html',
  styleUrls: ['./list-buses-search.component.css']
})
export class ListBusesSearchComponent implements OnInit {

  constructor(private transfereService : TransfereService) { }
  listSchedule : any
  ngOnInit(): void {
    this.listSchedule = this.transfereService.getData()
    console.log("listSchedule : ")
    console.log(this.listSchedule)
  }

}
