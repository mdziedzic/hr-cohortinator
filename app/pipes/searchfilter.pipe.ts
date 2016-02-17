import { Pipe, Injectable, PipeTransform } from "angular2/core";

@Pipe({
  name: 'search',
  pure: false
})

@Injectable()

export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], args: any[]): any {
    var searchFor = String(args[0]).toLowerCase();
    return items.filter(function(item) {
      var fullName = (item.firstName + ' ' + item.lastName);
      fullName = fullName.toLowerCase();
      return fullName.indexOf(searchFor) !== -1;
    });
  }
}
