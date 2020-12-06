import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm = new FormGroup({
    fullName : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl(''),
    password : new FormControl('')
  });
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService , 
    private router : Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.register(this.registerForm.value).subscribe(
      res => {
        console.log(this.registerForm.value)
        console.log(res);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert("Đăng ký thành công");
        this.router.navigateByUrl('/singin');
      },
      error => {
        // console.log(error)
        // this.errorMessage = error.error.message;
        alert(error.error.name)
        this.isSignUpFailed = true;
      }
    )
  }
}
