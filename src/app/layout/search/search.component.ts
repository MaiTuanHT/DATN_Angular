import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import {SearchService} from './search.service'
import {TransfereService} from '../../services/transfere.service'

import {Router} from '@angular/router'

import Swal from 'sweetalert2';

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
    this.startLocation = this.searchForm.value.startLocation;
    this.stopLocation = this.searchForm.value.stopLocation;
    this.date = this.searchForm.value.date
    this.searchService.GetSchedule(this.startLocation , this.stopLocation , this.date).subscribe(data =>{
      this.listScheduleSearch = data
      if(!this.listScheduleSearch){
        alert("Không có lịch trình phù hợp")
      }
      else{
        this.transfereService.setData(this.listScheduleSearch) // truyền dữ liệu 

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/listBusesSearch']);
      }); 

        // this.router.navigate(['/listBusesSearch'])
      }
      
    }, error=>{
      alert(error.error.name)
    })
  }
}
