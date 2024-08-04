export class OrderDetail {
    constructor(initData?: Partial<OrderDetail>) {
      Object.assign(this, initData);
    }
  
    PurchaseCount!: number;
  
    UnitPrice!: number;
  }
  