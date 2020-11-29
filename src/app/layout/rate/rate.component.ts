import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StarRatingComponent } from 'ng-starrating';
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
   ) { }

  ngOnInit(): void {
    this.agency = this.data.agency
    this.user = this.data.user
    // console.log(this.data)
    // console.log(this.user)
    // this.user = this.decodeJwtService.getDecodedAccessToken()
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }


stars: number[] = [1, 2, 3, 4, 5];
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
   console.log(this.data)
  // this.agency = this.data
  // console.log("data rate" + this.data.agency._id)
  // this.user =  await this.decodeJwtService.getDecodedAccessToken()
  // console.log(this.user._id)
    // console.log(this.selectedValueQulity *2 )

    // console.log(this.selectedValueService * 2)
  await this.rateService.Rate(
      this.selectedValueQulity,
      this.selectedValueService,
      this.data.agency._id,
      this.data.user.userID
      ).subscribe(res =>{
        alert("Đánh giá thành công")
      } , error =>{
        console.log(error)
        // alert("Lỗi : " + error.name)
      })
    this.dialogRef.close();
}

close() {
    this.dialogRef.close();
}

}
