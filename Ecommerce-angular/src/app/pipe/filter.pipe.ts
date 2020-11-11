import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any , filterstring: string , propName: string) {
      if (filterstring === '') {
          return value;
      }
      const arrayS = [];
      for (const item of value) {
        if (item[propName].toLowerCase() === filterstring.toLowerCase()) {
            arrayS.push(item);
        }
      }
      return arrayS;
    }
}
