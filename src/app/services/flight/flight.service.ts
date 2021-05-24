import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  getByFilter(filter: any) {
    return this.http.post(environment.apiUrl + '/Flights/Filter', filter);
  }

  getById(id: any) {
    return this.http.post(environment.apiUrl + '/Flights/GetById/' + id, null);
  }

  getByHourFilter(filter: any) {
    return this.http.post(environment.apiUrl + '/Flights/HourFilter', filter);
  }

  search(filter: any) {
    return this.http.post(environment.apiUrl + '/Flights/Search', filter);
  }

  save(flight: any) {
    return this.http.post(environment.apiUrl + '/Flights/Save', flight);
  }

}
