import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-agency',
  templateUrl: './detail-agency.component.html',
  styleUrls: ['./detail-agency.component.css']
})
export class DetailAgencyComponent implements OnInit {

  agency: any

  constructor(private dialogRef: MatDialogRef<DetailAgencyComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit(): void {
    console.log("Vao Detail")
    this.agency = this.data.agency
    console.log(this.agency)
  }

  close() {
    this.dialogRef.close();
}

}
