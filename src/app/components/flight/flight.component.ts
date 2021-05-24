import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input() flightId: any;
  booking: any = { Passenger: { } };

  constructor(private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.flightId = params.get('id');
      this.booking.FlightId = this.flightId;
    });

  }

  save() {
    console.log(this.booking);
    this.bookingService.Save(this.booking).subscribe((result: any) => {
      alert(result.messageError);
      this.router.navigate(['']);
    }, err => {
      alert(err);
      // this.errorSave = err;
      // this.colorSave = 'red';
    });
  }

  back() {
    this.router.navigate(['']);
  }

}
