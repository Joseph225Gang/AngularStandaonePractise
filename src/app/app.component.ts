import { AfterViewChecked, AfterViewInit,Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, OnInit, HostListener, ChangeDetectorRef, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FontSizeComponent} from './font-size/font-size.component';
import { CommonModule } from '@angular/common';
import { Task } from './task';
import { OrderByPipe } from './order-by.pipe';
import { TaskService } from './task.service';
import { OrderService} from './order.service';
import { OrderDiscountService} from './order-discount.service';
import { OrderDetail } from './order-detail';
import { OrderAnniversaryService} from './order-anniversary.service';
import { IOrderService, ORDER_SERVICE } from './order.interface';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FontSizeComponent, CommonModule, OrderByPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers:[{provide:OrderService, useClass: OrderDiscountService}],
   //providers:[{provide:OrderService, useValue: {computeTotal: () => 100}}],
  /*providers:[{provide:OrderService, useFactory: () => {
    const today = new Date(2020, 9, 3);
    if (today.getMonth() === 9) {
      return new OrderAnniversaryService();
    } else {
      return new OrderService();
    }
  }}],*/
  providers: [{ provide: ORDER_SERVICE, useClass: OrderService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked{
  total = 0;
  title = 'angular-practise-sample';
  fontSize : number = 12;
  fontSizeType : string | number = 'small';
  @ViewChild(FontSizeComponent, { static: true })
  staticSize!: FontSizeComponent;
  counter: number = 0;
  now = new Date();
  task = new Task({ TaskSn: '001', TaskName: '待辦事項 A', State: 'Finish' });
  tasks: Task[] = [
    new Task({ TaskSn: '001', TaskName: '待辦事項 A', State: 'Finish' }),
    new Task({ TaskSn: '002', TaskName: '待辦事項 B', State: 'Doing' }),
    new Task({ TaskSn: '003', TaskName: '待辦事項 C', State: 'None' }),
    new Task({ TaskSn: '004', TaskName: '待辦事項 D', State: 'None' }),
  ];
  columnDesc = {
    TaskSn: '編號',
    TaskName: '名稱',
    State: '狀態',
  };
  condition:string = "";
  readonly formCondition = new FormControl();
  
  constructor(private changeDetectorRef: ChangeDetectorRef, private taskService: TaskService, public orderService: IOrderService)
  {
    const array1 = [1, 2, 3, 4];
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    console.log(sumWithInitial);
    this.tasks = this.taskService.getTasks();
    for(let i of this.tasks){
      console.log(i.TaskSn + ',' + i.TaskName + ',' + i.State);
    }

  }
  ngOnInit(): void {
    // 要用右上方的 Open in New Window 功能，利用開發者工具觀察
    console.log('AppComponent - ngOnInit - staticSize', this.staticSize);
    this.orderService.details = [
      new OrderDetail({ PurchaseCount: 2, UnitPrice: 200 }),
      new OrderDetail({ PurchaseCount: 4, UnitPrice: 50 }),
    ];
    this.total = this.orderService.computeTotal();
  }

  ngAfterViewInit(): void {
    console.log('AppComponent - ngAfterViewInit - staticSize', this.staticSize);
  }

  ngAfterViewChecked(): void {
    console.log('AppComponent - ngAfterViewChecked');
  }

  onIncrease(num : number)
  {
      this.fontSize += num;
  }

  onDecrease(num: number)
  {
    this.fontSize -= num;
  }

  onSetFontSize(num: number)
  {
    alert('app' + num);
    this.fontSize += num;
    alert(this.fontSize);
  }

  onSizeChange(size: number)
  {
    this.fontSize = size;
  }

  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
    this.changeDetectorRef.detectChanges();
  }
  resetCounter() {
    this.counter = 0;
  }

  get fontClass(): string {
    return `${this.fontSizeType}-font`;
  }

  onSubmit(form: NgForm): void {
    console.log('表單資料：', form.value);
  }
  
  onSearch(): void{
    console.log(`查詢條件：${this.formCondition.value}`);
  }
}
