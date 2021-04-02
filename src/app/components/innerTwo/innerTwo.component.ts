import { Component, OnInit } from '@angular/core';
import { IWidget, WIDGET } from 'src/app/utils/Widget';

@Component({
  selector: 'app-innerTwo',
  templateUrl: './innerTwo.component.html',
  styleUrls: ['./innerTwo.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: InnerTwoComponent,
    multi: true
  }]
})
export class InnerTwoComponent implements OnInit, IWidget {
  constructor() { }

  loadData(): void {
    console.log("[InnerTwoComponent] loading data...");
  }

  ngOnInit() {
  }

}
