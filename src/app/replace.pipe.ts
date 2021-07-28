import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value)

    let initialValue = value;
    if(args[0]){
      let paramvalue = args[0].toUpperCase();
      return initialValue.split(args[0]).join(paramvalue);
      // return initialValue.replace(/args[0]/g, paramvalue);

    }

     initialValue = value.toUpperCase();
    
    return initialValue;
  }

}
