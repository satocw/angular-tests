import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-as-cmp',
  template: `
    <div *ngIf="prop.a as alias">{{alias}}</div>
  `,
  styleUrls: ['./ng-if-as-cmp.component.css']
})
export class NgIfAsCmpComponent implements OnInit {

  prop = {
    'a': 'aaa'
  };

  constructor() { }

  ngOnInit() {
  }


}
