import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { OrderComponent } from './Components/order/order.component';
import { AddOrderItemComponent } from './Components/add-order-item/add-order-item.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';    
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './Components/new-order/new-order.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './Components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    AddOrderItemComponent,
    NewOrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule,
   HttpClientModule,
   MatButtonModule,
FormsModule,
MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
