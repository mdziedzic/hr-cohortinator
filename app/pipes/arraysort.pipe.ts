import { Pipe } from "angular2/core";

@Pipe({
  name: "sort"
})

export class ArraySortPipe {
  transform(array: Array<any>, args: string): Array<any> {
    var sortBy = args[0];
    array.sort((a: any, b: any) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      } else if (a[sortBy] > b[sortBy]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
