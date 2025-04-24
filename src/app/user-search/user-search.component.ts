import { Component, effect, resource, signal } from '@angular/core';
import { API_URL } from './config';
import { User } from './model';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { httpResource } from '@angular/common/http';

import { z as zod } from 'zod';

const UsersSchema = zod.array(
  zod.object({
    id: zod.number(),
    name: zod.string()
  })
)

@Component({
  selector: 'app-user-search',
  imports: [MatProgressBarModule],
  template: `
    <fieldset>
      <legend>Users Search</legend>
      <input
        (input)="query.set($any($event.target).value)"
        type="search"
        placeholder="Search..."
      />
    </fieldset>
    @if (users.isLoading()) {
    <mat-progress-bar mode="query" />
    } @if (users.error()) {
    <div class="error">{{ users.error() }}</div>
    }
    <section class="actions">
      <button (click)="users.reload()">Reload</button>
      <button (click)="addUser()">Add User</button>
      <button (click)="users.set([])">Clear</button>
    </section>
    <ul>
      @for (user of users.value(); track user.id) {
      <li>{{ user.name }}</li>
      } @empty {
      <li class="no-data">Nothing to show</li>
      }
    </ul>
  `,
})
export class UserSearchComponent {
  query = signal('');

  // with the help of http resource to fetch data
  // users = httpResource<User[]>(() => `${API_URL}?name_like=^${this.query()}`, {
  //   defaultValue: [],
  //   parse: (rawData) => UsersSchema.parse(rawData)
  // });

  // configuring the request URL
  users = httpResource<User[]>(() => ({
    url:  `${API_URL}`,
    params: {
      "name_like": `^${this.query()}`
    },
    headers: {
      'custom_header': 'header_1'
    }
  }), {
    defaultValue: [],
    parse: (rawData) => UsersSchema.parse(rawData)
  });

  /* 
    * with the help of resource and httpResource, the returned value is not a signal, it is httpResource ref
      hence we cannot read it like a function, for example users()
      but we need to read it from users.value()

    * whenever a signal specified inside httpResouce changes, Api will be recalled

    * loading state
      there is a method called isLoading() to get the loading state, actually its a signal, to read signal we call it has a method

    * error handling
      there is signal called error, we can get the error there

    * recall the API
      there is signal property called reload to recall the API

    * we can specify the default value, in second parameter with defaultValue key

    * schema validation library

    * parse function in option
      this function helps us to reshape the respone into another form, or for any validation purpose 

    * we can also configure the request by adding headers

*/
  constructor() {
    // effect(() => {
    //   console.log(this.users.status());
    // })

    effect(() => {
      this.users.error() && console.log(this.users.error());
    });
  }
  addUser() {
    const user = { id: 123, name: 'Dmytro Mezhenskyi' };
    this.users.update((users) => (users ? [user, ...users] : [user]));
  }
}
