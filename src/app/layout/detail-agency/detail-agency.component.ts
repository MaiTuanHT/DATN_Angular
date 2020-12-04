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
    this.agency = this.data.agency
  }

  close() {
    this.dialogRef.close();
}

}
