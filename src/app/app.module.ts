import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchBookingComponent } from './components/search-booking/search-booking.component';
import { BookingComponent } from './components/booking/booking.component';
import { FlightComponent } from './components/flight/flight.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBookingComponent,
    BookingComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypeaheadModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
