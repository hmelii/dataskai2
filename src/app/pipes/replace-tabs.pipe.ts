import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'replaceTabs' })
export class ReplaceTabs implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\t/g, '&nbsp;&nbsp;');
  }
}
