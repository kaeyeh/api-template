

  import {Component, OnInit} from '@angular/core';
  import { templates } from '../service/template.service';
  import { UserService, User } from '../service/user.service';
  import {Observable} from "rxjs/Observable";
  import 'rxjs/add/operator/reduce';

  @Component({
    selector: 'app-comp2',
    template: templates['comp2.component'],
    styleUrls: ['./comp2.component.css'],
    providers: [UserService]
  })
  export class Comp2Component implements OnInit {
    // Remove the states to prevent defects, but I have to leave on for catching
    // HTTP error, so far I have no way to handle error with async pipe
    private users$ : Observable<any>;
    //private tail$ : Observable<any>;
    private hero: User;
    private id = 0;
    constructor( private user: UserService) {
    }

    ngOnInit() {
      // Remove the states to prevent defects
      this.users$ = this.user.load$();
      // this.tail$ = this.user.tail$(95);

      // handle error
      this.users$.subscribe(
        data => {},
        this._error
      );

    }

    _error( err: any) {
      console.debug(err);
    }


    private tail$ () {
      return this.user.tail$(95);
    }


    getHero() {
      this.id++;
      this.user.hero$(this.id).subscribe(
        users => this.hero = users[0]
      )
    }

  }

