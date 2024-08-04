import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform(list: any[], prop: string): any[] {
    return list.sort((a, b) =>
      a[prop] > b[prop]
        ? 1
        : a[prop] === b[prop] ? 0 : -1  
    );
  }

}
