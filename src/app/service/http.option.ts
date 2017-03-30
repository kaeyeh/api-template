import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class HttpOption extends BaseRequestOptions {

  constructor() {
    super();

    // Set the default 'Content-Type' header
    this.headers.set('api-key', '999999999');
  }
}

export const httpOptionProvider = { provide: RequestOptions, useClass: HttpOption };
