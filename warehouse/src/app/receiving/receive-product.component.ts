import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'app/shared/Product';
import { HttpClient } from '@angular/common/http';
import { debounceTime, throttle, distinctUntilChanged, throttleTime, map, switchMap, tap, catchError } from 'rxjs/operators';
import { from, of, Subject } from 'rxjs';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css'],
  styles: ['#orderContents img { height: 50px }']
})
export class ReceiveProductComponent implements OnInit{

  showForm: boolean = false;
  receivedProducts = [];
  productID:string;
  quantity:number;
  trackingNumber:string;
  product: Product;

  prodIdSubj: Subject<string> = new Subject();

  constructor(
    private _http:HttpClient
  ) { }

  ngOnInit() {
    //this.obs$.subscribe();
  }
 
  get prodIdObs() {
    return this.prodIdSubj.asObservable();
  }

  product$ = url => this._http.get(url).pipe(
    catchError(err => console.log),
    tap((prod:Product) => this.product = prod)
  );

  obs$ = this.prodIdObs.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    map(id => `/api/products/${id}`),
    switchMap(url => this.product$(url))
  )


  getProduct(prodId){
    this.prodIdSubj.next(prodId);
  }
  
  saveTrackingNumber(){
    console.log("Tracking Number", this.trackingNumber);
    this.showForm = true;
  }

  receiveProduct(productID:string, quantity:number) {
    this.productID = productID;
    this.quantity = quantity;
    this.receivedProducts.push({productID, quantity});
    this.productID = "";
    this.quantity = null;
  }

  finishedReceiving(){
    console.log("Finished product")
  }
}
