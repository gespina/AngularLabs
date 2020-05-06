import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css'],
  styles: ['#orderContents img { height: 50px }']
})
export class ReceiveProductComponent implements OnInit {

  showForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  saveTrackingNumber(){
    this.showForm = true;
  }

  receiveProduct() {
    console.log("Receive product")
  }

  finishedReceiving(){
    console.log("Finished product")
  }
}
