import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nw-orders-to-ship',
  templateUrl: './orders-to-ship.component.html',
  styleUrls: ['./orders-to-ship.component.css']
})
export class OrdersToShipComponent implements OnInit {
  
  orders;
  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this.getOrdersReadyToShip();
  }

  getOrdersReadyToShip() {
    const url = `/api/orders/readyToShip`;
    this._http.get(url).toPromise()
    .then(
      res => this.orders = res
    )
  }

}
