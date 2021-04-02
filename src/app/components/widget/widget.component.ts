import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit } from '@angular/core';
import { IWidget, WIDGET } from 'src/app/utils/Widget';
import { InnerOneComponent } from '../innerOne/innerOne.component';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @ContentChild(WIDGET, { static: true }) widget: IWidget;

  constructor() { }


  ngOnInit() {
    this.widget.loadData()
  }

}
