import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { ReceiveProductComponent } from "./receiving/receive-product.component";
import { ShipOrderComponent } from "./shipping/ship-order.component";
import { OrdersToShipComponent } from "./shipping/orders-to-ship.component";
import OrderLine from "./shared/orderLine";
import Order from "./shared/order";
import Product from "./shared/product";
import Location from "./shared/location";
import Customer from "./shared/customer";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    ReceiveProductComponent,
    ShipOrderComponent,
    OrdersToShipComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
