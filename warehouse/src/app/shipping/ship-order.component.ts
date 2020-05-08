import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/Order';
import { OrderLine } from '../shared/OrderLine';
import { Product } from '../shared/Product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, first } from "rxjs/operators";
import { Location } from 'app/shared/Location';

@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.css'],
  styles: ['.big-checkbox { transform: scale(2) }', 'img {height:50px}']
})
export class ShipOrderComponent implements OnInit {
  order: Order;

  constructor(
    private route: ActivatedRoute,
    private _http: HttpClient
    ) { }

  ngOnInit() {
    let orderID = this.route.snapshot.params.orderID;
    const url = `/api/orders/${orderID}`;
    this._http.get(url).pipe(
      map(data => <Order>data)
    ).subscribe(
      order => this.order = order
    )
  }

  isReadyToShip(order) {
    return order.lines.every(line => line.picked);
  }

  getBestLocation(orderLine: OrderLine) {
    const url = `/api/locations/forProduct/${orderLine.productID}`;
    this._http.get(url).pipe(
      map(data => <Array<Location>>data),
    ).subscribe(
      best => orderLine.locationID = best[0].id
    )
  }

  markAsShipped(order: Order) {
    order.status = 1;
  }

  markWithProblem(order: Order) {
    order.status = 2;
  }

}