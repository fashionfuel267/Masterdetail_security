import { Component, Inject, OnInit } from '@angular/core';
import { Item } from '../../Models/item.model';
import { GlobalService } from '../../Services/global.service';
import { OrderService } from '../../Services/order.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderItem } from '../../Models/order-item.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-order-item',
  templateUrl: './add-order-item.component.html',
  styleUrl: './add-order-item.component.css'
})
export class AddOrderItemComponent implements OnInit {
  itemList:Item[]=[]
  isValid:boolean=true;
  formData:OrderItem={
    ID: 0,
    OrderId: 0,
    PrdID: 0,
    Qty: 0,
    Price: 0,
    Total: 0,
    ItemName: ''
  };
  updatePrice(e:any){
 console.log(e.selectedIndex)
    if(e.selectedIndex===0)
      {
        this.formData.Price=0;
        this.formData.ItemName=''
      }
      else
      {
        this.formData.Price=this.itemList[e.selectedIndex-1].Price;
        this.formData.ItemName=this.itemList[e.selectedIndex-1].Name;
      }
      this.updateTotal();
    
  }
  updateTotal(){
    console.log(this.formData.Qty)
    this.formData.Total=parseFloat(  (this.formData.Price * this.formData.Qty).toFixed(2));
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef:MatDialogRef<AddOrderItemComponent>,
    private itemservice:GlobalService,
     public orderService:OrderService
  ){}
  loadItem(){ 
    this.itemservice.getAll().subscribe({
      next:(res)=>{
        this.itemList=res
        console.log(this.itemList)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.loadItem()
    console.log(this.data)
    console.log(this.data.OrderIndex)
    if(this.data.OrderIndex==null )
      {
        this.formData={
        ID: 0,
        OrderId: 0,
        PrdID: 0,
        Qty: 0,
        Price: 0,
        Total: 0,
        ItemName: ''
      };     
      }
      else
      {
        this.formData=Object.assign({}, this.orderService.orderItems[this.data.OrderIndex]);
      }
  }
  onSubmit(form:NgForm){
    console.log("Order items")
 console.log( form.value)
  if(this.validateForm(form.value))
  {
    if(this.data.OrderIndex==null )
      {
       this.orderService.orderItems.push(form.value);
      }
      else
      {
        this.orderService.orderItems[this.data.OrderIndex]=form.value;
      }
  this.dialogRef.close();
  }
  }
  validateForm(formData:OrderItem)
{
  if(this.formData.PrdID==0 )
        this.isValid=false;
      else if( this.formData.Qty==0)
        this.isValid=false;
        else
        this.isValid=true;
      return this.isValid;
}
}
