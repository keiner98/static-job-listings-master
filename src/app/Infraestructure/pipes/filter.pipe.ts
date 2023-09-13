import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from 'src/app/Domain/interfaces/jobs.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: any[],
    arg: any,
    type: string = 'role',
    type2: string = 'level'
  ): any {
    console.log(arg, value);

    return value; // if (value !== undefined) {
    //   let result = [];
    //   for (const element of value) {
    //     if (element[type].toLowerCase().indexOf(arg.toLowerCase()) > -1) {
    //       result.push(element);
    //     }
    //     if (type2 !== '') {
    //       if (element[type2].toLowerCase().indexOf(arg.toLowerCase()) > -1) {
    //         result.push(element);
    //       }
    //     }
    //   }
    //   let data: any[] = [];
    //   result.forEach((item) => {
    //     if (!data.find((itemResult) => itemResult[type] === item[type])) {
    //       data.push(item);
    //     }
    //   });
    //   return data;
    // }
  }
}
