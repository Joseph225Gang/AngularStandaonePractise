import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-typescript-prac',
  standalone: true,
  imports: [],
  templateUrl: './typescript-prac.component.html',
  styleUrl: './typescript-prac.component.css'
})
export class TypescriptPracComponent {
  plusOperation(x,y) {
    return x + y;
  }
  sum(...numbers){
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  fetchNumbers(){
    return fetch('some/api/numbers').then(response => response.json());
  }

  callFetchNumbers()
  {
    this.fetchNumbers()
      .then(data => this.sum(...data))
      .then(console.log)
  }

  executePop()
  {
    const arr = [1, 2, 3];
    const popElement = arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    this.addition(123, 456);
    
  }

  addition(x:number,y:number):number
  {
    return x + y;
  }

  something: number = 123;
  addSomething(x: number): number{
    return (x + this.something) as number;
  }

  isPositive: (input: number) => boolean = input => input > 0;
  isPositiveA = (input => input > 0) as (input: number) => boolean;
  isPositiveB = <(input: number) => boolean>(input => input > 0);
  isPositiveC : (input: number) => boolean = input => input > 0;
  isPositiveD = (input: number): boolean => input > 0;
}
