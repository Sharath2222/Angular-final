import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDishComponent } from './components/add-dish/add-dish.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PlacedordersComponent } from './components/placedorders/placedorders.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterGuardService } from './service/router-guard-service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'nav',component:NavbarComponent},
  {path:'pizza',component:HomeComponent},
  {path:'beverages',component:HomeComponent},
  {path:'snacks',component:HomeComponent},
  {path:'burger',component:HomeComponent},
  {path:'cart',component:CartComponent,canActivate:[RouterGuardService]},
  {path:'add-dish',component:AddDishComponent,canActivate:[RouterGuardService]},
  {path:'add-dish/:id',component:AddDishComponent,canActivate:[RouterGuardService]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: 'home', component: HomeComponent },
  { path: 'payment', component:PaymentComponent },
  { path: 'orders', component:PlacedordersComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
