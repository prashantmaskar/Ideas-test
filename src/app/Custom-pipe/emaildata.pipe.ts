import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emaildata'
})
export class EmaildataPipe implements PipeTransform {

  transform(value:string): string {
    
    return value.replace(/@.*$/,"");;
  }

}
