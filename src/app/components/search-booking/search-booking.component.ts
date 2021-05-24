import { BookingService } from './../../services/booking/booking.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-booking',
  templateUrl: './search-booking.component.html',
  styleUrls: ['./search-booking.component.css']
})
export class SearchBookingComponent implements OnInit {

  bookingNumber: string = '';
  lastName: string = '';
  @Output() searchDone: EventEmitter<any> = new EventEmitter<any>();

  constructor(private bookingService: BookingService,
    private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.bookingService.GetByFilter({ BookingNumber: this.bookingNumber, LastName: this.lastName }).subscribe(
      (result: any) => {
        this.searchDone.emit();
        this.router.navigate(['/booking', result.booking.Id]);
      }
    );

  }

}
