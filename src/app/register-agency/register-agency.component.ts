import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterAgencyService } from './register-agency.service';

@Component({
  selector: 'app-register-agency',
  templateUrl: './register-agency.component.html',
  styleUrls: ['./register-agency.component.css']
})
export class RegisterAgencyComponent implements OnInit {
  registerAgencyForm = new FormGroup({
    nameAgency : new FormControl(''),
    phoneNumber : new FormControl(''),
    discription : new FormControl(''),
    policy : new FormControl(''),
    utilities : new FormControl('')
  });

  constructor(private router: Router , private registerAgencyService: RegisterAgencyService) { }

  ngOnInit(): void {
   
  }

async onSubmit(){
    if(
      this.registerAgencyForm.value.nameAgency === "" ||
      !this.registerAgencyForm.value.nameAgency ||
      this.registerAgencyForm.value.phoneNumber === "" ||
      !this.registerAgencyForm.value.phoneNumber
    ){
      alert("Xin vui lòng điền thông tin Tên Nhà Xe và Số Điện Thoại")
    }
    else{
      await this.registerAgencyService.Agency(this.registerAgencyForm.value.nameAgency , this.registerAgencyForm.value.phoneNumber,
        this.registerAgencyForm.value.discription , this.registerAgencyForm.value.utilities ,
        this.registerAgencyForm.value.policy).subscribe(res=>{
        alert("Bạn Đã Đăng Ký Thành Công Nhà Xe Của Mình \nHãy Liên Hệ 0348721777 Để Truy Cập Nhé")
        this.router.navigateByUrl('');
      } , error=>{
        alert(error.error.name)
      })
    }
  }
}
