import { Injectable, OnInit} from '@angular/core';

import 'rxjs/add/operator/publishLast';

import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class ApiService implements OnInit {


  constructor( private http: Http) {

  }
  ngOnInit () {

  }

  get (resource) {

    // TODO: read endpoint from configuration file
    var root = 'https://jsonplaceholder.typicode.com';

    return this.http.get(root+'/'+resource)
      .map(this._map, this)
      .publishLast()    // publish, i.e. multicast(asyncSubject), only the last item observed to each Observer
      .refCount();   // automatically calls Connect() and dispose() on the connection to the source observable

  }


  _map ( value, index ) {
    return value.json();
  }

}
