import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {

    let initialValue = value.toUpperCase;
    return initialValue;
  }

}
