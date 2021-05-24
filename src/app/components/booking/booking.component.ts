import { FlightComponent } from './../flight/flight.component';
import { BookingService } from './../../services/booking/booking.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight/flight.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @Input() bookingId: any;
  booking: any = { Passenger: { } };
  flight: any = { FlightNuber: '', DepartureCity: { IATACode: '' }, ArrivalCity: { IATACode: '' }, DepartureDate: '' };

  constructor(private bookingService: BookingService,
    private flightService: FlightService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookingId = params.get('id');
      if (this.bookingId) {
        this.bookingService.GetById(this.bookingId).subscribe((result: any) => {
          this.booking = result.booking;
          this.flightService.getById(this.booking.FlightId).subscribe((result: any) => {
            this.flight = result.flight;
          });
        });
      }
    });
  }

  update() {
    console.log(this.booking);
    this.bookingService.Update(this.booking).subscribe((result: any) => {
      alert(result.messageError);
      this.router.navigate(['']);
      // this.errorSave = result.messageError;
      // this.colorSave = 'green';
    }, err => {
      console.log(err);
      // this.errorSave = err;
      // this.colorSave = 'red';
    });
  }

  back() {
    this.router.navigate(['']);
  }

}
