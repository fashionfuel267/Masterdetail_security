import { OrderItem } from "./order-item.model";

export class Item {
    Id :number=0;
    Name:string="";
    Price : number=0;
   ImagePath:number=0;
    OrderItems :OrderItem[]=[];
}
