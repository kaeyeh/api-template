

  import {Component, OnInit} from '@angular/core';
  import { templates } from '../service/template.service';
  import { UserService, User } from '../service/user.service';
  import {Observable} from "rxjs/Observable";

  @Component({
    selector: 'app-comp2',
    template: templates['comp2.component'],
    styleUrls: ['./comp2.component.css'],
    providers: [UserService]
  })
  export class Comp2Component implements OnInit {

    private users$ : Observable<any>;
    private tail$ : Observable<any>;
    private hero: User;
    private id = 0;
    constructor( private user: UserService) {
    }

    ngOnInit() {


    this.users$ = this.user.load$();
    this.tail$ = this.user.tail$(95);

    // handle error
    this.users$.subscribe(
      data => {},
      this._error
    );





      //this.user$.catch(this._error);
    }

    _error( err: any) {
      console.debug(err);
    }

    getHero() {
      this.id++;
      this.user.hero$(this.id).subscribe(
        users => this.hero = users[0]
      )
    }

  }

