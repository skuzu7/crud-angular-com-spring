import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === 'Front-end') {
      return 'code';
    } else if (value === 'Back-end') {
      return 'computer';
    } else if (value === 'Fullstack') {
      return 'developer_mode';
    } else {
      return 'unknown';
    }


  }
}



