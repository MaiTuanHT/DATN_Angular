import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import {SearchService} from './search.service'
import {TransfereService} from '../../services/transfere.service'

import {Router} from '@angular/router'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  startLocation : any
  stopLocation : any
  listScheduleSearch: any;
  searchForm = new FormGroup({
    startLocation : new FormControl(''),
    stopLocation : new FormControl('')
  });

  constructor(private searchService : SearchService , private router: Router, private transfereService : TransfereService) { }

  ngOnInit(): void {
    // this.onSubmit()
  }

  onSubmit(){
    this.startLocation = this.searchForm.value.startLocation;
    this.stopLocation = this.searchForm.value.stopLocation;
    // this.ngOnInit()
    this.searchService.GetSchedule(this.startLocation , this.stopLocation).subscribe(data =>{
      console.log("Diem Di" + this.startLocation)
      this.listScheduleSearch = data
      // console.log(this.listScheduleSearch)
      this.transfereService.setData(this.listScheduleSearch)
      this.router.navigateByUrl('/listBusesSearch')
    })
  }

}
