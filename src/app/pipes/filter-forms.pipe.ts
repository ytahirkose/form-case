import { Pipe, PipeTransform } from '@angular/core';
import {Form} from "../models/form";
import {FormInfo} from "../models/form-info";

@Pipe({
  name: 'filterForms'
})
export class FilterFormsPipe implements PipeTransform {

  transform(value: FormInfo[], args?: string): FormInfo[] {
    return args ? value.filter((ag: FormInfo) => ag.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) !== -1) : value;
  }

}
