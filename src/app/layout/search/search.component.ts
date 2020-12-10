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
  date: any
  listScheduleSearch: any;
  searchForm = new FormGroup({
    startLocation : new FormControl(''),
    stopLocation : new FormControl(''),
    date : new FormControl('')
  });

  constructor(private searchService : SearchService , private router: Router, private transfereService : TransfereService) { }

  ngOnInit(){
    // this.onSubmit()
  }

  onSubmit(){
    console.log("Vao Search Lan")
    this.startLocation = this.searchForm.value.startLocation;
    this.stopLocation = this.searchForm.value.stopLocation;
    this.date = this.searchForm.value.date
    this.searchService.GetSchedule(this.startLocation , this.stopLocation , this.date).subscribe(data =>{
      console.log("Diem Di" + this.startLocation)
      this.listScheduleSearch = data
      this.transfereService.setData(this.listScheduleSearch)
      this.router.navigateByUrl('/listBusesSearch')

    }, error=>{
      alert(error.error.name)
    })
  }

  // refesh(){
  //   this.ngOnInit()
  // }

}
