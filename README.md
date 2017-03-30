# API base class, Default HTTP Header and Template Aggregation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.31.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## api.service.ts
 get method return a multicast async subject that caches the http GET response (after process by the _map)
 return this.http.get(root+'/'+resource)
      .map(this._map, this)
      .publishLast()    // publish, i.e. multicast(asyncSubject), only the last item observed to each Observer
      .refCount();   // automatically calls Connect() and dispose() on the connection to the source observable


## http.option.ts

Inject the default header to the HTTP request

## template.service.ts

Parse the template downloaded from AEM for component to used

@Component({
    selector: 'app-comp2',
    template: templates['comp2.component'],
    styleUrls: ['./comp2.component.css'],
    providers: [UserService]
  })

