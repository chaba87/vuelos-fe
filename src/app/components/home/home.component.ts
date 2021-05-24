import { noop, Observable, Observer, of } from 'rxjs';
import { CityService } from './../../services/city/city.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { FlightService } from 'src/app/services/flight/flight.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filter: any = {  };
  cities: any[] = [];
  citiesDeparture: Observable<any> = new Observable<any>();
  citiesArrival: Observable<any> = new Observable<any>();
  getCities = this.cityService.getCities();
  tableFlights: any[] = [];
  error = '';
  helper: any;
  departure = '';
  arrival = '';
  errorSave = '';
  colorSave = '';
  dialogSearchBookingRef: BsModalRef = new BsModalRef();

  constructor(private cityService: CityService,
    private flightService: FlightService,
    private modalService: BsModalService,
    private router: Router) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe((response: any) => {
      this.cities = response.cities;
      this.citiesDeparture = new Observable((observer: Observer<any>) => {
        observer.next(this.departure);
      }).pipe(
        switchMap((query: string) => {
          if (query) {
            return this.cityService.searchCities(query).pipe(
              map((data: any) => data.cities && data.cities || []),
              tap(() => noop, err => {
                console.log(err);
              })
            );
          }
          return of([]);
        })
      );
      this.citiesArrival = new Observable((observer: Observer<any>) => {
        observer.next(this.arrival);
      }).pipe(
        switchMap((query: string) => {
          if (query) {
            return this.cityService.searchCities(query).pipe(
              map((data: any) => data.cities && data.cities || []),
              tap(() => noop, err => {
                console.log(err);
              })
            );
          }
          return of([]);
        })
      );
    });

  }

  searchFlights() {
    this.error = '';
    if (!this.filter.DepartureStationId || this.filter.DepartureStationId == 0) {
      this.error = 'Debe seleccionar un origen';
      return false;
    }
    if (!this.filter.ArrivalStationId || this.filter.ArrivalStationId == 0) {
      this.error = 'Debe seleccionar un destino';
      return false;
    }
    if (!this.filter.DepartureDate || this.filter.DepartureDate == "") {
      this.error = 'La fecha de viaje debe ser mayor a la fecha actual';
      return false;
    }
    this.flightService.getByFilter(this.filter).subscribe((result: any) => {
      this.tableFlights = result.flights.sort((a: any, b: any) => (a.DepartureDate > b.DepartureDate) ? 1 : -1);
      if (!this.tableFlights || this.tableFlights.length == 0)
        this.error = 'No se encontraron viajes para el destino y fecha seleccionados';
    });
    return true;
  }

  DepartureChange() {
    const dep = this.cities.find(x => x.Name.toUpperCase() == this.departure.toUpperCase());
    if (dep && dep != null)
      this.filter.DepartureStationId = dep.Id;
  }

  ArrivalChange() {
    const dep = this.cities.find(x => x.Name.toUpperCase() == this.arrival.toUpperCase());
    if (dep && dep != null)
      this.filter.ArrivalStationId = dep.Id;
  }

  continue(flight: any) {
    this.router.navigate(['/flight', flight.Id]);
  }

  searchBook(dialog: TemplateRef<any>) {
    this.dialogSearchBookingRef = this.modalService.show(dialog, { class: 'modal-lg' });
  }

  hideModal() {
    this.dialogSearchBookingRef.hide();
  }

}

