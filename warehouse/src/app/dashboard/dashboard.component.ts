import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'app/shared/Order';

@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders:Array<any>;
  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this.getOrdersReadyToShip();
  }

  getOrdersReadyToShip() {
    const url = `/api/orders/readyToShip`;
    this._http.get<Array<any>>(url).toPromise()
    .then(
      body => this.orders = body
    )
  }
}
