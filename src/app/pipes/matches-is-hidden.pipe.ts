import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchesIsHidden',
})
export class MatchesIsHiddenPipe implements PipeTransform {
  transform(items: Array<any>, prop: string): Array<any> {
    return items.filter((item) => item[prop]);
  }
}
