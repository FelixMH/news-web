import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitToPipe'
})
export class LimitToPipePipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    /*
    *   @param limit
    *   const regex:
    *   description: regular expression to limit content to @param limit which is the desire content to show at the view.
    */
    const regex = new RegExp(`((\\W*\\w+){0,${limit}})`);

    /*
    *   const result
    *   description: save the result once the value which is the content is validated within the regexp.
    */
    const result = value.match(regex)[1];

    /*
    *   returns the result within a trailing which it's '...' when the result is minor than content instead if not, only returns
    *   the result with the regexp, it means, limit applied.
    */
    return result.length < value.length ? result + '...' : result;
  }

}
