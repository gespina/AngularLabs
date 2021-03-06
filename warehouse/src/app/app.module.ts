import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReceiveProductComponent } from './receiving/receive-product.component';
import { ShipOrderComponent } from './shipping/ship-order.component';
import { OrdersToShipComponent } from './shipping/orders-to-ship.component';
import { NWRoutingModule } from './app.router';
import { ListOfOrdersComponent } from './shipping/list-of-orders.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './shared/login.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    ReceiveProductComponent,
    ShipOrderComponent,
    OrdersToShipComponent,
    ListOfOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    NWRoutingModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
