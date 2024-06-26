import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../Services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from '../../Services/order.service';
import { Order } from '../../Models/order.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
 public custList:Customer[]=[];
  isValid:boolean=true;
optionalOrderID:number=0; 
//  order:Order={
//    OrderID: 0,
//    CusID: '',
//    PMethod: '',
//    GTotal: 0,
//    OrderNo: '',
//    DeletedOrderItemIDs: ''
//  } 
constructor(public service:OrderService,
    public dialog:MatDialog,
    public custService:CustomerService,
    // private toastr:ToastrService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ){
      
    }
   
  ngOnInit(): void {
    this.loadCustomer()
    
  }
  loadCustomer(){
    this.custService.getAll().subscribe({
      next:(res)=>{
        console.log(res)
this.custList= res
console.log(this.custList)

      },
      error:(err)=>{
console.log(err)
      }
    })
  }
    //OrderID
    addoreditItem( OrderID:number,i?:number)
    {

    }

    goToList()
    {}
    deleteItem(OrderId:number,i:number)
    {

    }
    onSubmit( form:NgForm){

    }
}
