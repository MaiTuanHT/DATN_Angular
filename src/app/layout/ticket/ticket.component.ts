import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets: any

  constructor(private dialogRef: MatDialogRef<TicketComponent>,
    @Inject(MAT_DIALOG_DATA) private data , ) { }

  ngOnInit(): void {

    this.tickets = this.data.tickets
    console.log(this.tickets)

  }

  close() {
    this.dialogRef.close();
}

}
