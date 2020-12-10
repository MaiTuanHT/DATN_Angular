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
    console.log("Vao lan thu : ")
    this.listSchedule = this.transfereService.getData()
  }
}
