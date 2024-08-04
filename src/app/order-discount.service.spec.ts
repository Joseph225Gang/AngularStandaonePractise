import { TestBed } from '@angular/core/testing';

import { OrderDiscountService } from './order-discount.service';

describe('OrderDiscountService', () => {
  let service: OrderDiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
