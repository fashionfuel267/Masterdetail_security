import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer.model';
const baseUrl="https://localhost:7232/api/Customers";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Customer[]> {
    let t= localStorage.getItem("authSecretKey")
    let  header= new HttpHeaders({
      "Content-Type": "application/json", 
      "Accept": "application/json",
      "Authorization": "Bearer " +t
  })
    return this.http.get<Customer[]>(baseUrl, {headers: header});
  }

  get(id: any): Observable<Customer> {
    return this.http.get<Customer>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${baseUrl}?title=${title}`);
  }
}
