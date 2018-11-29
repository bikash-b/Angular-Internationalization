import { Pipe, PipeTransform } from '@angular/core';
import { LocalizeService } from './localize.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private _locSvc: LocalizeService){}

  transform(value: any, args?: any): any {
    //console.log(this._locSvc.localizeMessages);
    let localValue: string = this._locSvc.localizeMessages[value];
    let tfValue: string = localValue ? localValue : value;
    return tfValue;
  }

}