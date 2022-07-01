import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { AddDishComponent } from './components/add-dish/add-dish.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PlacedordersComponent } from './components/placedorders/placedorders.component';




@NgModule({
  declarations: [
   
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    CartComponent,
    AddDishComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    PlacedordersComponent,
   

  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,
    FormsModule,HttpClientModule
   
    
   
    
   
    
  ],
  providers: [
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
