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
  name : any
  userGet: any

  bookForm = new FormGroup({
    phone : new FormControl(''),
    seat : new FormControl('')
  });
  
  async ngOnInit() {
    this.user = await this.decodeJwtService.getDecodedAccessToken()
    console.log("user : " , this.user)
    this.name = this.user.fullName

     await this.bookTicketService.getUser(this.user.userID).subscribe(data=>{
      this.userGet = data
    }, error=>{
      alert(error.error.name)
    })

    const id = this.route.snapshot.paramMap.get('id');
    console.log('id : ', id)
    await this.bookTicketService.GetSchedule(id).subscribe(data =>{
      this.schedule = data
      console.log(this.schedule)
      this.nameGarage = this.schedule.agencyID.nameAgency
      console.log("name agency: " , this.nameGarage)
      this.routeSchedule = this.schedule.routeID.startLocation + " - " + this.schedule.routeID.stopLocation
      this.time = this.schedule.date + " - " + this.schedule.busID.departureTime
    })
  }

  async onSubmit(){
    if(!this.user){
      alert("Bạn phải có tài khoản và đăng nhập trước khi đặt vé")
      this.router.navigateByUrl('/singin')
    }else if(this.bookForm.value.seat < 1){
      alert("Số ghế bạn đặt phải lớn hơn 0")
    }
    else if(!this.bookForm.value.phone || this.bookForm.value.phone == ''||
    !this.bookForm.value.seat){
      alert("Xin vui lòng điền đầy đủ thông tin")
    }
    else if(this.bookForm.value.seat > (this.schedule.busID.seat- this.schedule.booked)){
      alert("Số ghế không đủ . Xin vui lòng chọn số ghế phù hợp ")
    }
    else{
      await this.bookTicketService.Ticket(this.user.fullName,this.bookForm.value.phone,this.schedule._id , this.bookForm.value.seat).subscribe(res=>{
        this.ticket = res
        if(this.ticket){
          console.log(this.ticket)
          alert("Đăng kí vé thành công");
          this.router.navigateByUrl('');
         }
     }, error=>{
       alert(error.error.name)
     })
    }
   
  }

}
