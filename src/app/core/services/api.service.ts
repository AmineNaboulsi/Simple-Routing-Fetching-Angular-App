import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
export interface User {
  id: number;
  name: string;
  company: string;
  username: string;
  email: string;
  address: string;
  zip: string;
  state: string;
  country: string;
  phone: string;
  photo: string;
}
//https://fake-json-api.mock.beeceptor.com/users
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = environment.apiUrl ||  "https://fake-json-api.mock.beeceptor.com/users"

  constructor(public http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlApi);
  }
}
