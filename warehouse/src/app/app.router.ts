import { RouterModule } from "@angular/router";
import { OrdersToShipComponent } from './shipping/orders-to-ship.component';
import { ReceiveProductComponent } from './receiving/receive-product.component';
import { ShipOrderComponent } from './shipping/ship-order.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes = [
    {
        path: 'ship', component: OrdersToShipComponent
    },
    {
        path: 'receive', component: ReceiveProductComponent
    },
    {
        path: 'ship/:orderID', component: ShipOrderComponent
    },
    {
        path: 'inventory', component: InventoryComponent
    },
    {
        path: '', component: DashboardComponent
    },
    {
        path: '**', component: DashboardComponent
    },
];

export const NWRoutingModule = RouterModule.forRoot(routes);