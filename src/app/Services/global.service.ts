import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Models/item.model';
const baseUrl="https://localhost:7232/api/Items";
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(baseUrl);
  }

  get(id: any): Observable<Item> {
    return this.http.get<Item>(`${baseUrl}/${id}`);
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
  findByTitle(title: any): Observable<Item[]> {
    return this.http.get<Item[]>(`${baseUrl}?title=${title}`);
  }
}
