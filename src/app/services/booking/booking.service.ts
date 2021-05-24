import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  GetByFilter(filter: any) {
    return this.http.post(environment.apiUrl + '/Booking/Filter', filter);
  }

  GetById(id: number) {
    return this.http.post(environment.apiUrl + '/Booking/GetById/' + id, null);
  }

  Update(booking: any) {
    return this.http.post(environment.apiUrl + '/Booking/Update', booking);
  }

  Save(booking: any) {
    return this.http.post(environment.apiUrl + '/Booking/Save', booking);
  }

}
