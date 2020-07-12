import { Injectable } from "@angular/core";
import { AppModule } from "./app.module";
import { Product } from "./product";
import { of, Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Shipping } from "./shipping/shipping";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Shipping[] {
    return this.http.get<Shipping[]>("/assets/shipping.json");
  }
}
