import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecodeJwtService } from '../helpers/decode-jwt.service';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  user: any
  constructor(public decodeJwtService: DecodeJwtService, 
    public tokenStorageService: TokenStorageService,
    private router: Router) { }

  ngOnInit() {
    
  }

  singOut(){
    this.ngOnInit()
    this.tokenStorageService.signOut()
    // this.ngOnInit()
   
    // window.location.reload()
    this.router.navigate(['singin'])
  }

}
