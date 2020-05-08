import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'app/shared/Order';

@Component({
  selector: 'list-of-orders',
  templateUrl: './list-of-orders.component.html',
  styleUrls: ['./list-of-orders.component.css']
})
export class ListOfOrdersComponent implements OnInit {

  _orders: [Order];

  @Output()
  ordersChange: EventEmitter<[Order]> = new EventEmitter();

  @Input()
  set orders(_order:[Order]) {
    this._orders = _order;
    this.ordersChange.emit(this._orders);
  }

  get orders() {
    return this._orders;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
