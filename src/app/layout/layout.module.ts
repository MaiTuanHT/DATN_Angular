import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ListRoutesComponent } from './list-routes/list-routes.component';
import { SearchComponent } from './search/search.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ListBusesComponent } from './list-buses/list-buses.component';
import { ListAgencysComponent } from './list-agencys/list-agencys.component';
import { ListBusesSearchComponent } from './list-buses-search/list-buses-search.component';


@NgModule({
  declarations: [LayoutComponent,ListRoutesComponent,SearchComponent,BookTicketComponent,ListBusesComponent,ListAgencysComponent, ListBusesSearchComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
