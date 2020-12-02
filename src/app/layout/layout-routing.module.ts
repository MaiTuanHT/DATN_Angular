import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { form } from 'rxjs';
import { BookTicketComponent } from './book-ticket/book-ticket.component';

import { LayoutComponent } from './layout.component';
import { ListAgencysComponent } from './list-agencys/list-agencys.component';
import { ListBusesComponent } from './list-buses/list-buses.component';
import { ListRoutesComponent } from './list-routes/list-routes.component';
import { SearchComponent } from './search/search.component';
import {ListBusesSearchComponent} from './list-buses-search/list-buses-search.component';
import {SinginComponent} from '../singin/singin.component';
import {RegisterComponent} from '../register/register.component'
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { RateComponent } from './rate/rate.component';
import { RegisterAgencyComponent } from '../register-agency/register-agency.component';


const routes: Routes = [{ path: '', component: LayoutComponent,
  children: [
    { path:"agencys", component:ListAgencysComponent},
    { path:"", component:ListRoutesComponent},
    { path:"book-ticket/:id",component:BookTicketComponent},
    { path:"search", component:SearchComponent},
    { path:"buses/:id", component:ListBusesComponent},
    {path: "listBusesSearch" , component: ListBusesSearchComponent},
    {path: "singin" , component: SinginComponent},
    {path: "register-agency" , component: RegisterAgencyComponent},
    {path: "register" , component: RegisterComponent},
    {path: "tickets" , component: TicketManagementComponent},
    {path: "rate" , component: RateComponent}
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
