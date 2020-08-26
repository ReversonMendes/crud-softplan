import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "cpf"
})
export class CpfPipe implements PipeTransform {
  transform(value: string): any {
    let result = "";

    if (value != null) {
      result =
        value.substring(0, 3) +
        "." +
        value.substring(2, 5) +
        "." +
        value.substring(5, 8) +
        "-" +
        value.substring(8, 11);
    }

    return result;
  }
}
