import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  constructor(private cart: CartService) {}

  ngOnInit() {}

  get numberOfItems(): number {
    return this.cart.items.length;
  }

  get hasItems(): boolean {
    return this.numberOfItems > 0;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
