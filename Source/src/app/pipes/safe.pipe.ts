import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
@Pipe({
  name: 'safe'
})
/*Pipe personal para sanitizar url de imágines*/
export class SafePipe implements PipeTransform {
  constructor(protected _sanitizer: DomSanitizer) {
  }
  public transform(value: string):SafeUrl  {
        return this._sanitizer.bypassSecurityTrustUrl(value);
  }
}