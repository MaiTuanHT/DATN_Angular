import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import {SearchService} from './search.service'


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

  constructor(private searchService : SearchService) { }

  ngOnInit(): void {
    // this.onSubmit()
   
    
  }

  onSubmit(){
    this.startLocation = this.searchForm.value.startLocation;
    this.stopLocation = this.searchForm.value.stopLocation;
    // this.ngOnInit()
    this.searchService.GetSchedule(this.startLocation , this.stopLocation).subscribe(data =>{
      // console.log(this.startLocation)
      this.listScheduleSearch = data
      console.log(this.listScheduleSearch)
    })
  }

}
