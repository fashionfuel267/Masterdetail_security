import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './Components/order/order.component';
import { NewOrderComponent } from './Components/new-order/new-order.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './auth.guard';
import { Order } from './Models/order.model';

const routes: Routes = [
  // {path:"",component:LoginComponent},
  {path:"",component:OrderComponent},
  {path:"order",component:NewOrderComponent,},
  // canActivate:[authGuard]
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
