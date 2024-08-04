import { InjectionToken } from '@angular/core';
import { OrderDetail } from './order-detail';

export const ORDER_SERVICE = new InjectionToken<IOrderService>('Order SErvice');

export interface IOrderService {
  details: OrderDetail[];

  computeTotal(): number;
}
