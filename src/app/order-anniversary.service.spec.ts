import { TestBed } from '@angular/core/testing';

import { OrderAnniversaryService } from './order-anniversary.service';

describe('OrderAnniversaryService', () => {
  let service: OrderAnniversaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderAnniversaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
