import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from './helpers/auth.interceptor';

// import { SearchComponent } from './search/search.component';
import { from } from 'rxjs';
import { SearchComponent } from './layout/search/search.component';
import { ListRoutesComponent } from './layout/list-routes/list-routes.component';
import { ListAgencysComponent } from './layout/list-agencys/list-agencys.component';
import { ListBusesComponent } from './layout/list-buses/list-buses.component';
import { BookTicketComponent } from './layout/book-ticket/book-ticket.component';
import { TicketManagementComponent } from './layout/ticket-management/ticket-management.component';
import { SinginComponent } from './singin/singin.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SinginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
