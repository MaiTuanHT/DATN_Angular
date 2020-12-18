import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { from } from 'rxjs';
import { DecodeJwtService } from 'src/app/helpers/decode-jwt.service';
import {RateService} from './rate.service'


@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  agency: any
  user : any

  constructor(private dialogRef: MatDialogRef<RateComponent>,
    @Inject(MAT_DIALOG_DATA) private data , 
    private rateService : RateService,
    private router: Router,
   ) { }

  ngOnInit(): void {
    this.agency = this.data.agency
    this.user = this.data.user
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }


stars1: number[] = [1, 2, 3, 4, 5];
stars2: number[] = [1, 2, 3, 4, 5];
selectedValueQulity: number = 0;
  selectedValueService : number = 0;

countStarQuality(star) {
    this.selectedValueQulity = star;
}

countStarService(star) {
  this.selectedValueService = star;
}


addClassQuality(star) {
   let ab = "";
   for (let i = 0; i < star; i++) {
     ab = "starIdQ" + i;
     document.getElementById(ab).classList.add("selectedQ");
   }
}

addClassService(star) {
  let ab = "";
  for (let i = 0; i < star; i++) {
    ab = "starIdQ" + i;
    document.getElementById(ab).classList.add("selectedS");
  }
}

removeClassQuality(star) {
  let ab = "";
  for (let i = star-1; i >= this.selectedValueQulity; i--) {
    ab = "starIdS" + i;
    document.getElementById(ab).classList.remove("selectedQ");
  }
}

removeClassSercice(star) {
   let ab = "";
   for (let i = star-1; i >= this.selectedValueService; i--) {
     ab = "starIdS" + i;
     document.getElementById(ab).classList.remove("selectedS");
   }
}
 async save() {
      await this.rateService.Rate(
      this.selectedValueQulity,
      this.selectedValueService,
      this.data.agency._id,
      this.data.user.userID
      ).subscribe(res =>{
        if(res){
          alert("Đánh giá thành công")
          this.router.navigate(['/agencys']) // em có gọi như anh nói ở đây nhưng ko load đc nè window.location.reload() // ở đây em load lại toàn bộ , em muốn load lại mỗi component agency thôi
          // em load lại trang bằng cách này, nhưng cái này load hết toàn bộ , em muốn load mỗi compone
          // compnent em muốn load lại 
        }
        else{
          alert("Ban Chua Dang Nhap")
        }
      } , error =>{
        alert(error.error.name)
      })
      
      this.dialogRef.close();
}

close() {
    this.dialogRef.close();
}

}
