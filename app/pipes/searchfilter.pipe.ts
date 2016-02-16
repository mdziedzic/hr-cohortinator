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
      var blob = (item.firstName + item.lastName);
      blob = blob.toLowerCase();
      return blob.indexOf(searchFor) !== -1;
    });
  }
}
