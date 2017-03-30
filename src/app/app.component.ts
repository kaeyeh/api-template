import { Component } from '@angular/core';
import { templates } from './service/template.service';

@Component({
  selector: 'app-root',
  template: templates['app.component'],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
