import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor( private authService :AuthService, 
    private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

   onSubmit(){
    this.authService.login(this.loginForm.value).subscribe(
      res => {
        this.tokenStorage.saveToken(res.accessToken);
        console.log(res);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        alert("Login thanh cong")
        this.router.navigateByUrl('/');
      },
      error => {
        alert(error.error.name)
        this.isLoginFailed = true;
      }
    )
   }

}
