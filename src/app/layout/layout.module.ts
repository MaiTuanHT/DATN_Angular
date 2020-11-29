import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';


import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ListRoutesComponent } from './list-routes/list-routes.component';
import { SearchComponent } from './search/search.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ListBusesComponent } from './list-buses/list-buses.component';
import { ListAgencysComponent } from './list-agencys/list-agencys.component';
import { ListBusesSearchComponent } from './list-buses-search/list-buses-search.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { TicketComponent } from './ticket/ticket.component';
import { RateComponent } from './rate/rate.component';
// import {MatDialogModule} from "@angular/material/dialog";
// import {RateComponent} from './rate/rate.component'

import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    LayoutComponent,
    ListRoutesComponent,
    SearchComponent,
    BookTicketComponent,
    ListBusesComponent,
    ListAgencysComponent, 
    ListBusesSearchComponent,
    TicketManagementComponent,
    TicketComponent,
    RateComponent,
    // MatDialogModule
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    RatingModule
  ],
  entryComponents: [RateComponent]
})
export class LayoutModule { }
