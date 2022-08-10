import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  saveCustomer(newCustomer: Customer): Observable<Customer>{

  return this.http.post<Customer>("http://localhost:8080/customer/save", newCustomer, {headers: this.httpHeadres});

  }
}
