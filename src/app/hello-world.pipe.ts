import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'helloWorld',
  standalone: true
})
export class HelloWorldPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
