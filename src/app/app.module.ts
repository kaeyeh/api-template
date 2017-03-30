import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_INITIALIZER } from '@angular/core';
import { templates } from './service/template.service';

import { AppComponent } from './app.component';
import { Comp2Component } from './comp2/comp2.component';

import { httpOptionProvider }   from './service/http.option';


@NgModule({
  declarations: [
    AppComponent,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    httpOptionProvider
  ],
  bootstrap: [AppComponent,Comp2Component]

})
export class AppModule { }

