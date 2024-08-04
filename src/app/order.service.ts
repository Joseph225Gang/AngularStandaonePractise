import { Injectable } from '@angular/core';
import { OrderDetail} from './order-detail';
import { IOrderService } from './order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements IOrderService {
  details: OrderDetail[] = [];

  constructor() { }

  computeTotal(): number {
    return this.details
      .map((d) => d.PurchaseCount * d.UnitPrice)
      .reduce((act, curr) => act + curr, 0);
  }
}
