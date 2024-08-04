import { Injectable } from '@angular/core';

import { OrderDetail } from './order-detail';

@Injectable({
  providedIn: 'root'
})
export class OrderAnniversaryService {

  details: OrderDetail[] = [];

  constructor() {}

  computeTotal(): number {
    return this.details
      .map((d) => d.PurchaseCount * d.UnitPrice * 0.8)
      .reduce((act, curr) => act + curr, 0);
  }
}
