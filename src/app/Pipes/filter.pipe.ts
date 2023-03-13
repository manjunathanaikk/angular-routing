import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterdString: string) {
    if (value.length === 0 || filterdString === '') {
      return value;
    }
    const users = [];
    for (const user of value) {
      console.log(user);
      if (user['userName'] === filterdString) {
        users.push(user);
      }
    }
    return users;
  }
}
