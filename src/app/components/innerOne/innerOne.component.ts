import { Component, OnInit } from '@angular/core';
import { IWidget, WIDGET } from 'src/app/utils/Widget';

@Component({
  selector: 'app-innerOne',
  templateUrl: './innerOne.component.html',
  styleUrls: ['./innerOne.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: InnerOneComponent,
    multi:true
  }]
})
export class InnerOneComponent implements OnInit, IWidget {

  constructor() { }

  ngOnInit() {
  }
  loadData(): void {
    console.log("[InnerOneComponent] loading data...");
  }

}
