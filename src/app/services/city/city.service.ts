import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get(environment.apiUrl + '/City/GetAll');
  }

  searchCities(search: string) {
    return this.http.post(environment.apiUrl + '/City/Search', { search });
  }

}
