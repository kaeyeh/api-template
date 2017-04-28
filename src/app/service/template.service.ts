import {Injectable, Inject} from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ObservableInput } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


// export var templates = {};
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     parse(this);
//   }
// };
// xhttp.open("GET", "id.html", false);
// xhttp.send();
//
// function parse(xml) {
//   var parser, xmlDoc;
//   parser = new DOMParser();
//   xmlDoc = parser.parseFromString(xml.responseText,"text/html");
//
//   var nodes = xmlDoc.documentElement.firstChild.childNodes;
//   var len = nodes.length;
//   //(<any>window).templates = {};
//   for (let i = 0; i < len ;i++) {
//     if (nodes[i].nodeName === 'SCRIPT') {
//       templates[nodes[i].id] = nodes[i].innerHTML;
//     }
//   }
//
// }
class TemplateService {
  private xhttp = null;

  constructor () {
    this.parse(document.getElementById('_templates'));
  }

  parse = (dom) => {
    dom.childNodes.forEach( node => {
      if (node.nodeName === 'SCRIPT') {
        this[node.id] = node.innerHTML;
      }
    });
  }
}
export var templates = new TemplateService();




// @Injectable()
// class TemplateService {
//
//   private templates = {};
//
//   constructor(public http: Http) {
//
//     this.http.get('id.html')
//       .map(this.parse)
//       .catch(this.handleError);
//   }
//
//   parse(respond) {
//
//   }
//   handleError(err: any, caught: Observable<void>): any {
//
//   }
//
//   public load() {
//     return new Promise((resolve, reject) => {
//       this.http.get('id.html').map( res => res ).catch((error: any):any => {
//         console.log('Error reading templates.');
//         resolve(true);
//         return Observable.throw(error.json().error || 'Server error');
//       }).subscribe( (response: any) => {
//
//         var parser, xmlDoc;
//         parser = new DOMParser();
//         xmlDoc = parser.parseFromString(response._body,"text/html");
//
//         var nodes = xmlDoc.documentElement.firstChild.childNodes;
//         var len = nodes.length;
//         (<any>window).templates = {};
//         for (let i = 0; i < len ;i++) {
//           if (nodes[i].nodeName === 'SCRIPT') {
//             (<any>window).templates[nodes[i].id] = nodes[i].innerHTML;
//           }
//         }
//
//
//         resolve(true);
//       });
//
//     });
//   }
//}


