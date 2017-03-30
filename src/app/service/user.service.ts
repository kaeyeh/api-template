import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { ApiService } from './api.service';
import {Observable} from "rxjs/Observable";

export interface User {
  id: number;
  title: string;
}

@Injectable()
export class UserService extends ApiService{

  private users$: Observable<User[]>;
  constructor( http: Http) {
    super(http);

  }

  load$() {
    this.users$ = super.get('posts');
    return this.users$;
  }

  // initial transformation
  _map ( value, index ) {
    // process data here
    var ob = super._map(value, index);
    // filter out even
    return ob.filter((value, index)=> {
      return value.id % 2 === 1;
    }, this);
  }

  _error( err: any, caught: any) {
    console.debug(err);
    return caught;
  }

  tail$(id) {
    return this.users$.map(users => {
      return users.filter(user => user.id > id);
    }, this);

  }
   hero$(id) {
      return this.users$.map( users => {
        return users.filter (user => user.id === id);
      });

  }

}
