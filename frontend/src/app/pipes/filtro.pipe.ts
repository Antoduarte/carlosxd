import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args: any):any {
    const results = [];
    for(const result of value ){
if (result.fechaCreacion.indexOf(args()) > -1) {
        results.push(result);
      }
    }
    return results;
  }

}
