import { Component, OnInit } from '@angular/core';
import { Order } from '../../Models/order.model';
import { OrderService } from '../../Services/order.service';
import { CustomerService } from '../../Services/customer.service';
import { Customer } from '../../Models/customer.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddOrderItemComponent } from '../add-order-item/add-order-item.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.css'
})
export class NewOrderComponent implements OnInit {
  custList:Customer[]=[]
order:Order={
  OrderID: 0,
  CusID: '',
  Paymethod: '',
  TotalPrice: 0,
  OrderNo: '',
  DeletedOrderItemIDs: ''
}
isValid:boolean=false;
constructor(public srv:OrderService,
  public custService:CustomerService,
  public dialog: MatDialog
){}
  ngOnInit(): void {
    this.loadCustomer();
  }
  goToList(){}
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
saveTutorial(): void {
  const data = {
    title: "" ,
    description: ""
  };

  this.srv.create()
    .subscribe({
      next: (res) => {
        console.log(res);
        
      },
      error: (e) => console.error(e)
    });
}
addoreditItem(OrderIndex?:number,OrderID?:number){
  const dialogconfig=new MatDialogConfig();
  dialogconfig.autoFocus=true;
  dialogconfig.disableClose=true;
  dialogconfig.width="50%";
  dialogconfig.data={
    OrderIndex,OrderID
  }
  console.log(OrderIndex)
  this.dialog.open(AddOrderItemComponent,dialogconfig).afterClosed().subscribe(res=>{
  this.updateGTotal();

  })
}
updateGTotal(){

  this.srv.formData.TotalPrice=this.srv.orderItems.reduce((pre,curr)=>{
    return pre+curr.Total;
  },0);
  this.srv.formData.TotalPrice =parseFloat(this.srv.formData.TotalPrice.toFixed(2));
  this.order.TotalPrice=parseFloat(this.srv.formData.TotalPrice.toFixed(2));
}

deleteItem(id:number,i:number){

}
onsubmit(form:NgForm){
  console.log(form.value)
  this.srv.create().subscribe({
    next:(r)=>{
        console.log(r)
    },
    error:(e)=>{

    }
  })
}
}
