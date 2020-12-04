import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { DecodeJwtService } from 'src/app/helpers/decode-jwt.service';
import {BookTicketService} from './book-ticket.service'

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  constructor(
    private route: ActivatedRoute , 
    private bookTicketService : BookTicketService ,
    private decodeJwtService: DecodeJwtService,
    private router : Router
    ) { }
  schedule : any
  routeSchedule: any
  nameGarage: any
  time: any
  user: any
  ticket : any

  bookForm = new FormGroup({
    phone : new FormControl(''),
    seat : new FormControl('')
  });
  
  async ngOnInit() {
    this.user = this.decodeJwtService.getDecodedAccessToken()
    console.log(this.user)
    const id = this.route.snapshot.paramMap.get('id');
    await this.bookTicketService.GetSchedule(id).subscribe(data =>{
      this.schedule = data
      console.log(this.schedule)
      this.nameGarage = this.schedule.agencyID.nameAgency
      this.routeSchedule = this.schedule.routeID.startLocation + " - " + this.schedule.routeID.stopLocation
      this.time = this.schedule.date + " - " + this.schedule.busID.departureTime
    })
  }

  async onSubmit(){
    if(!this.user.fullName){
      alert("Bạn phải có tài khoản và đăng nhập trước khi đặt vé")
      this.router.navigateByUrl('/singin')
    }

    if(!this.bookForm.value.phone || this.bookForm.value.phone == ''||
    !this.bookForm.value.seat || this.bookForm.value.seat == ''){
      alert("Xin vui lòng điền đầy đủ thông tin")
    }
    else if(this.bookForm.value.seat > (this.schedule.busID.seat- this.schedule.booked)){
      const sgt = "Số ghế không đủ . Xin vui lòng chọn số ghế trong khoảng 1 -> " + (this.schedule.busID.seat - this.schedule.booked)
      alert(sgt)
    }
    else{
      await this.bookTicketService.Ticket(this.user.fullName,this.bookForm.value.phone,this.schedule._id , this.bookForm.value.seat).subscribe(res=>{
        this.ticket = res
        if(this.ticket){
          console.log(this.ticket)
          alert("Đăng kí vé thành công");
          this.router.navigateByUrl('');
         }
     })
    }
   
  }

}
