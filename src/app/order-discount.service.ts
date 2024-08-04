import { Injectable } from '@angular/core';

import { OrderDetail } from './order-detail';

@Injectable({
  providedIn: 'root'
})
export class OrderDiscountService {
  details: OrderDetail[] = [];

  constructor() { }

  computeTotal(): number {
    const total = this.details
      .map((d) => d.PurchaseCount * d.UnitPrice)
      .reduce((act, curr) => act + curr, 0);
    return total * 0.9;
  }
}
