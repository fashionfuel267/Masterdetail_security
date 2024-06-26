import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/order.model';
import { OrderItem } from '../Models/order-item.model';
import { privateDecrypt } from 'node:crypto';
const baseUrl="https://localhost:7232/api/Orders";
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData:Order={
    OrderID: 0,
    CusID: '',
    Paymethod: '',
    TotalPrice: 0,
    OrderNo: '',
    DeletedOrderItemIDs: ''
  };
  orderItems:OrderItem[]=[];

  constructor(private http:HttpClient) { }
  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(baseUrl);
  }

  get(id: any): Observable<Order> {
    return this.http.get<Order>(`${baseUrl}/${id}`);
  }
  create(): Observable<any> {
    var  order ={
      ... this.formData,
      OrderItems:this.orderItems
    }
    console.log(order)
    return this.http.post(baseUrl+"/Orderposted", order);
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
  findByTitle(title: any): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}?title=${title}`);
  }
}
